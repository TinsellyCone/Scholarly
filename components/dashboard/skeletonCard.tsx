import {
  Button,
  Card,
  Image,
  Group,
  Stack,
  Divider,
  ActionIcon,
  Skeleton,
  MantineNumberSize,
} from "@mantine/core";
import { IconDotsVertical } from "@tabler/icons";

export default function SkeletonCard(props) {
  // imagePath, className, grade, active
  return (
    <Card w={300} shadow={"lg"} radius={"md"} p={"lg"} withBorder>
      <Card.Section>
        <Image src={props.imagePath} height={175} withPlaceholder></Image>
      </Card.Section>
      <Group position="apart" mt={"md"} mb={"xs"}>
        <Stack justify={"center"} spacing={0}>
          <Skeleton visible mb={10} h={20} w={170} />
          <Skeleton visible mb={7} h={10} w={75} />
        </Stack>
      </Group>

      <Divider mb={"sm"}></Divider>

      <Stack spacing={"xs"}>
        <Group position="left" spacing={"xs"}>
          <Skeleton visible w={20} h={20} />
          <Skeleton visible h={15} w={75} />
        </Group>
        <Group position="left" spacing={"xs"} mb={2}>
          <Skeleton visible w={20} h={20} />
          <Skeleton visible h={15} w={75} />
        </Group>
      </Stack>
      <Group position="center" mt={"md"} spacing={"xs"}>
        <Button
          variant="light"
          color={props.color}
          style={{ flex: 1 }}
          radius={process.env.NEXT_PUBLIC_RADIUS as MantineNumberSize}
        >
          View
        </Button>
        <ActionIcon
          size={36}
          variant="light"
          radius={process.env.NEXT_PUBLIC_RADIUS as MantineNumberSize}
        >
          <IconDotsVertical size={20} />
        </ActionIcon>
      </Group>
    </Card>
  );
}
