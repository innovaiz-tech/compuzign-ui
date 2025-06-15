import * as React from "react";
import { NavigationMenu } from "radix-ui";
import classNames from "classnames";
import { CaretDownIcon } from "@radix-ui/react-icons";
import "./header.css";
import { Link } from "react-router-dom";


export default function Headers() {
    return (
        <>
            <div className="w-full flex items-center justify-around px-4 bg-black">
                <p className="text-white">Logo</p>
                <div className="w-1/4"></div>
                <NavigationMenu.Root className="NavigationMenuRoot">
                    <NavigationMenu.List className="NavigationMenuList">
                        <NavigationMenu.Item>
                            <NavigationMenu.Link
                                className="NavigationMenuLink"
                                href="/"
                            >
                                Home
                            </NavigationMenu.Link>
                        </NavigationMenu.Item>
                        <NavigationMenu.Item>
                            <NavigationMenu.Link
                                className="NavigationMenuLink"
                                href="/about-us"
                            >
                                About Us
                            </NavigationMenu.Link>
                        </NavigationMenu.Item>
                        <NavigationMenu.Item>
                            <NavigationMenu.Trigger className="NavigationMenuTrigger">
                                Services <CaretDownIcon className="CaretDown" aria-hidden />
                            </NavigationMenu.Trigger>
                            <NavigationMenu.Content className="NavigationMenuContent">
                                <ul className="flex flex-col gap-0 w-52">
                                    <ListItem href="https://stitches.dev/" title="Stitches">
                                        Hi
                                    </ListItem>
                                    <ListItem href="/colors" title="Colors">
                                        Beautiful, thought-out palettes with auto dark mode.
                                    </ListItem>
                                    <ListItem href="https://icons.radix-ui.com/" title="Icons">
                                        A crisp set of 15x15 icons, balanced and consistent.
                                    </ListItem>
                                </ul>
                            </NavigationMenu.Content>
                        </NavigationMenu.Item>

                        <NavigationMenu.Item>
                            <NavigationMenu.Trigger className="NavigationMenuTrigger">
                                Resources <CaretDownIcon className="CaretDown" aria-hidden />
                            </NavigationMenu.Trigger>
                            <NavigationMenu.Content className="NavigationMenuContent">
                                <ul className="flex flex-col w-52">
                                    <ListItem
                                        title="Introduction"
                                        href="/primitives/docs/overview/introduction"
                                    >
                                        Build high-quality, accessible design systems and web apps.
                                    </ListItem>
                                    <ListItem
                                        title="Getting started"
                                        href="/primitives/docs/overview/getting-started"
                                    >
                                        A quick tutorial to get you up and running with Radix
                                        Primitives.
                                    </ListItem>
                                    <ListItem title="Styling" href="/primitives/docs/guides/styling">
                                        Unstyled and compatible with any styling solution.
                                    </ListItem>
                                </ul>
                            </NavigationMenu.Content>
                        </NavigationMenu.Item>

                        <NavigationMenu.Item>
                            <NavigationMenu.Link
                                className="NavigationMenuLink"
                                href="/partners"
                            >
                                Partners
                            </NavigationMenu.Link>
                        </NavigationMenu.Item>

                        <NavigationMenu.Indicator className="NavigationMenuIndicator">
                            <div className="Arrow" />
                        </NavigationMenu.Indicator>
                    </NavigationMenu.List>

                    <div className="ViewportPosition">
                        <NavigationMenu.Viewport className="NavigationMenuViewport" />
                    </div>
                </NavigationMenu.Root>
                <Link to="/" className="whitespace-nowrap text-white">Contact Us</Link>
            </div>
        </>
    )
}

const ListItem = React.forwardRef(
    ({ className, children, title, ...props }, forwardedRef) => (
        <li>
            <NavigationMenu.Link asChild>
                <a
                    className={classNames("ListItemLink", className)}
                    {...props}
                    ref={forwardedRef}
                >
                    <div className="ListItemHeading">{title}</div>
                    <p className="ListItemText">{children}</p>
                </a>
            </NavigationMenu.Link>
        </li>
    ),
);