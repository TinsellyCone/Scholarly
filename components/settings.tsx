import {
  Modal,
  Stack,
  Switch,
  Flex,
  NavLink,
  SegmentedControl,
  useMantineColorScheme,
  Title,
  MantineNumberSize
} from '@mantine/core'
import { IconDeviceDesktop, IconLink, IconUser } from '@tabler/icons-react'
import { useState } from 'react'
import Option from './settingsoption'

export default function SettingsModal({ isSettingsOpen, setSettingsOpen }) {
  const [activeTab, setActiveTab] = useState('profile')
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  return (
    <Modal
      overflow={"inside"}
      size={"xl"}
      onClose={() => setSettingsOpen(false)}
      opened={isSettingsOpen}
      title={"Settings"}
      centered
    >
      <Flex gap={20} pb={30} mih={450}>
        <Stack spacing={0}>
          <NavLink
            label={"Profile"}
            icon={<IconUser size={16} />}
            w={150}
            onClick={() => setActiveTab("profile")}
            active={activeTab == "profile"}
          />
          <NavLink
            label={"API"}
            icon={<IconLink size={16} />}
            w={150}
            onClick={() => setActiveTab("api")}
            active={activeTab == "api"}
          />
          <NavLink
            label={"Display"}
            icon={<IconDeviceDesktop size={16} />}
            w={150}
            onClick={() => setActiveTab("display")}
            active={activeTab == "display"}
          />
        </Stack>
        {activeTab == "profile" ? (
          <Stack w={"100%"}>
            <Title order={2} fw={700} mt={0}>
              Profile Settings
            </Title>
            <Option
              title={"Profile Publicity"}
              description={"Should your profile be shown to other students"}
              option={<Switch />}
            />
          </Stack>
        ) : null}
        {activeTab == "api" ? (
          <Stack w={"100%"}>
            <Title order={2} fw={700} mt={0}>
              API Settings
            </Title>
          </Stack>
        ) : null}
        {activeTab == "display" ? (
          <Stack w={"100%"}>
            <Title order={2} fw={700} mt={0}>
              Display Settings
            </Title>
            <Option
              title={"Appearance"}
              description={"Switch between light and dark theme"}
              option={
                <SegmentedControl
                  radius={process.env.NEXT_PUBLIC_RADIUS as MantineNumberSize}
                  value={colorScheme}
                  onChange={(value: "light" | "dark") =>
                    toggleColorScheme(value)
                  }
                  data={[
                    { label: "Light", value: "light" },
                    { label: "Dark", value: "dark" },
                  ]}
                  w={"min-content"}
                />
              }
            />
          </Stack>
        ) : null}
      </Flex>
    </Modal>
  );
}
