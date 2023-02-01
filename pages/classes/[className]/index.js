import { Button, Accordion, Table, Anchor } from "@mantine/core";
import { data } from "autoprefixer";
import Layout from "components/Layout";
import Head from "next/head";
import Link from "next/link";

export async function getServerSideProps(context) {
  let futureData = await fetch(
    "https://" +
      process.env.BASE_DOMAIN +
      "/api/v1/courses/" +
      context.query.className +
      "/assignments.json?access_token=" +
      process.env.API_KEY +
      "&per_page=10&order_by=due_at&bucket=future"
  ).then((response) => response.json());
  let pastData = await fetch(
    "https://" +
      process.env.BASE_DOMAIN +
      "/api/v1/courses/" +
      context.query.className +
      "/assignments.json?access_token=" +
      process.env.API_KEY +
      "&per_page=10&order_by=due_at&bucket=past"
  ).then((response) => response.json());
  let undatedData = await fetch(
    "https://knoxschools.instructure.com/api/v1/courses/" +
      context.query.className +
      "/assignments.json?access_token=" +
      process.env.API_KEY +
      "&per_page=10&order_by=due_at&bucket=undated"
  ).then((response) => response.json());

  futureData = futureData.map((data) => {
    return {
      id: data.id,
      name: data.name,
    };
  });
  pastData = pastData.map((data) => {
    return {
      id: data.id,
      name: data.name,
    };
  });
  undatedData = undatedData.map((data) => {
    return {
      id: data.id,
      name: data.name,
    };
  });

  return {
    props: {
      queryString: context.query,
      futureAssignments: futureData,
      pastAssignments: pastData,
      undatedAssignments: undatedData,
    },
  };
}

export default function classDetails({
  queryString,
  futureAssignments,
  pastAssignments,
  undatedAssignments,
}) {
  return (
    <Layout title={"Assignments"}>
      <Head>
        <title>Classes - Canvas</title>
      </Head>
      <main>
        <Accordion
          variant="separated"
          radius="md"
          chevronPosition="left"
          defaultValue={["future-assignments"]}
        >
          <Accordion.Item value="future-assignments">
            <Accordion.Control>Future Assignments</Accordion.Control>
            <Accordion.Panel>
              <Table verticalSpacing={"sm"}>
                <tbody>
                  {pastAssignments.map((currentAssignment) => {
                    return (
                      <tr key={currentAssignment.name}>
                        <td>
                          <Anchor
                            component={Link}
                            href={
                              "/classes/" +
                              queryString.className +
                              "/assignments/" +
                              currentAssignment.id
                            }
                          >
                            {currentAssignment.name}
                          </Anchor>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="undated-assignments">
            <Accordion.Control>Undated Assignments</Accordion.Control>
            <Accordion.Panel>
              <Table verticalSpacing={"sm"}>
                <tbody>
                  {undatedAssignments.map((currentAssignment) => {
                    return (
                      <tr key={currentAssignment.name}>
                        <td>
                          <Anchor
                            component={Link}
                            href={
                              "/classes/" +
                              queryString.className +
                              "/assignments/" +
                              currentAssignment.id
                            }
                          >
                            {currentAssignment.name}
                          </Anchor>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="past-assignments">
            <Accordion.Control>Past Assignments</Accordion.Control>
            <Accordion.Panel>
              <Table verticalSpacing={"sm"}>
                <tbody>
                  {pastAssignments.map((currentAssignment) => {
                    return (
                      <tr key={currentAssignment.name}>
                        <td>
                          <Anchor
                            component={Link}
                            href={
                              "/classes/" +
                              queryString.className +
                              "/assignments/" +
                              currentAssignment.id
                            }
                          >
                            {currentAssignment.name}
                          </Anchor>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </main>
    </Layout>
  );
}