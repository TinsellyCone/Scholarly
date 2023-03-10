import { Menu, Badge } from "@mantine/core";
import LogIn from "components/logIn";
import { IconCheck } from "@tabler/icons-react";
import Titlebar from "components/titlebar";
import Dashboard from "components/dashboard/index";
import { useSession } from "@supabase/auth-helpers-react";
import useProfile from "@/components/lib/useProfile";
import OnBoarding from "components/onboarding";

export default function Index() {
  const titlebarOptions = (
    <>
      <Menu.Label>Dashboard View</Menu.Label>
      <Menu.Item icon={<IconCheck size={14} />}>
        Card View <Badge color={"red"}>Placeholder</Badge>
      </Menu.Item>
      <Menu.Item>
        List View <Badge color={"red"}>Placeholder</Badge>
      </Menu.Item>
      <Menu.Item>
        Recent Activity <Badge color={"red"}>Placeholder</Badge>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item icon={<IconCheck size={14} />}>
        Color Overlay <Badge color={"red"}>Placeholder</Badge>
      </Menu.Item>
      <Menu.Divider />
    </>
  );

  const session = useSession();
  const { db, loading } = useProfile();
  if (!session) {
    return <LogIn />;
  } else if (!loading && db && db.is_setup != true) {
    return <OnBoarding />;
  }

  return (
    <>
      <Titlebar
        title="Dashboard"
        options={titlebarOptions}
      />
      <Dashboard />
    </>
  );
}
