import '@mantine/core/styles.css'
import {
    MantineProvider,
    AppShell,
    Burger,
    Group,
    UnstyledButton,
} from '@mantine/core'

import { theme } from './theme'

import { useDisclosure } from '@mantine/hooks'
import classes from './css/MobileNavbar.module.css'

import FooterLinks from './FooterLinks'

export default function App() {
    const [opened, { toggle }] = useDisclosure()
    return (
        <MantineProvider theme={theme}>
            <AppShell
                header={{ height: 60 }}
                navbar={{
                    width: 300,
                    breakpoint: 'sm',
                    collapsed: { desktop: true, mobile: !opened },
                }}
                padding="md"
            >
                <AppShell.Header>
                    <Group h="100%" px="md">
                        <Burger
                            opened={opened}
                            onClick={toggle}
                            hiddenFrom="sm"
                            size="sm"
                        />
                        <Group justify="space-between" style={{ flex: 1 }}>
                            <div
                                style={{
                                    height: 30,
                                    width: 30,
                                }}
                            >
                                Logo
                            </div>
                            <Group ml="xl" gap={0} visibleFrom="sm">
                                <UnstyledButton className={classes.control}>
                                    Home
                                </UnstyledButton>
                                <UnstyledButton className={classes.control}>
                                    Blog
                                </UnstyledButton>
                                <UnstyledButton className={classes.control}>
                                    Contacts
                                </UnstyledButton>
                                <UnstyledButton className={classes.control}>
                                    Support
                                </UnstyledButton>
                            </Group>
                        </Group>
                    </Group>
                </AppShell.Header>

                <AppShell.Navbar py="md" px={4}>
                    <UnstyledButton className={classes.control}>
                        Home
                    </UnstyledButton>
                    <UnstyledButton className={classes.control}>
                        Blog
                    </UnstyledButton>
                    <UnstyledButton className={classes.control}>
                        Contacts
                    </UnstyledButton>
                    <UnstyledButton className={classes.control}>
                        Support
                    </UnstyledButton>
                </AppShell.Navbar>

                <AppShell.Main>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Placeat ab ipsam praesentium eius voluptatum iusto nesciunt
                    odio! Cumque et, voluptatum perspiciatis sunt fuga explicabo
                    atque quae deserunt dolor voluptates modi! Molestias
                    deleniti quam dignissimos veniam aperiam, quo iure porro.
                    Quia perferendis recusandae aliquam minus, et, similique
                    eveniet voluptatem explicabo nulla, incidunt dolorum ipsam
                    ipsa? Quod doloremque laborum alias illo culpa. Consequatur
                    mollitia iusto nulla et nihil consequuntur odit repudiandae
                    vel incidunt hic possimus consectetur, neque quod eius
                    assumenda veniam culpa nobis pariatur rem blanditiis.
                    Asperiores voluptatum quam aspernatur saepe obcaecati!
                    Dignissimos reprehenderit fugit omnis facilis accusamus
                    possimus dolore dolorum eligendi delectus architecto
                    laboriosam est commodi voluptatibus ducimus, inventore
                    maiores! Modi quas obcaecati nobis magnam distinctio,
                    expedita pariatur quod temporibus tenetur? Accusamus ab
                    error repudiandae illo eligendi corporis minus iure! Magni
                    facere veritatis, reiciendis in recusandae odit iure
                    voluptatum adipisci aliquam et amet aperiam assumenda quas
                    dolorum perferendis, voluptate, tempore ex. Odit doloribus
                    rerum recusandae minima voluptatem exercitationem fugit
                    suscipit neque enim fugiat aliquam ipsam sapiente officia,
                    porro, tempora fuga. Ipsa exercitationem ullam rem provident
                    iure illum aspernatur non quibusdam quidem. Iure inventore,
                    accusantium autem sunt laudantium itaque aut nam nostrum
                    perspiciatis, quia voluptates maiores in cumque ab error
                    porro aliquid id sequi earum ex omnis harum suscipit qui
                    maxime. Rem! Perspiciatis explicabo aspernatur tenetur magni
                    deserunt porro ullam exercitationem labore veniam expedita
                    iste voluptatem culpa at ad dolorum vitae nesciunt mollitia
                    iusto dolores atque laudantium, modi reprehenderit? Quidem,
                    saepe hic. Autem, sint vitae nulla facere possimus fugit
                    suscipit illo. Magnam nemo vel consectetur possimus, impedit
                    reiciendis veritatis culpa fuga! Ipsum inventore accusantium
                    unde repellat quisquam ab tempora quod reprehenderit
                    accusamus? Ex, voluptates? Earum expedita commodi quod vel
                    tenetur voluptate placeat enim incidunt obcaecati maiores
                    saepe corrupti veritatis itaque, delectus ea dolore possimus
                    hic? Nemo provident error ipsa nihil, laboriosam illo.
                    Architecto nisi autem eum assumenda neque enim optio
                    quisquam quidem dolor doloremque soluta culpa quos similique
                    laboriosam, eveniet dicta nulla sed ut placeat. Reiciendis
                    esse enim mollitia eius provident nostrum! Soluta ea
                    doloremque repellat vel itaque quae maxime at aliquid
                    deserunt, eos ratione repellendus, excepturi laborum? Eius
                    fuga soluta maiores deleniti incidunt modi laboriosam earum,
                    hic quasi! Ad, voluptate labore! Dolorem esse animi
                    dignissimos reiciendis nemo beatae excepturi at,
                    exercitationem rerum, veritatis molestias obcaecati non
                    numquam eos temporibus quasi doloribus! Minima, nulla id
                    sunt provident dolor veritatis doloribus cum ab! Ipsam
                    accusantium nam necessitatibus ipsum consequatur voluptate,
                    suscipit repellendus commodi nemo. Hic aliquam quis ex
                    cumque sed repellendus facilis commodi? Architecto facere
                    impedit accusamus possimus tempora dolorem, aut esse magni?
                    Suscipit voluptatum provident molestias deleniti, eveniet
                    vel nisi fugiat commodi assumenda ipsum ratione est iusto!
                    Beatae reprehenderit at necessitatibus similique, eum iure
                    aliquam ratione nostrum maxime asperiores sunt optio
                    quaerat! Nostrum unde tempora rerum eius sunt reiciendis
                    vitae debitis ipsam architecto similique at excepturi
                    tempore ab quidem nisi ducimus nesciunt, ratione saepe
                    provident? Iure aspernatur tempore numquam labore a nam.
                </AppShell.Main>
            </AppShell>
                <FooterLinks />
        </MantineProvider>
    )
}
