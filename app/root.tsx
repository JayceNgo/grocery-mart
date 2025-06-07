import { useEffect } from "react";
import { isRouteErrorResponse, Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import Header from "./layouts/header";
import Footer from "./layouts/footer";
import type { Route } from "./+types/root";
import "./css/app.css";
export const links: Route.LinksFunction = () => [
    // Google Fonts
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
    },
    {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
    },
    {
        rel: "stylesheet",
        href: "/fonts/stylesheet.css",
    },
];
export function meta({}: Route.MetaArgs) {
    return [
        { title: "HiepGrocery" },
        {
            name: "description",
            content:
                "Welcome to HiepNgo Grocery! Đây là một sản phẩm dự án cá nhân về một trang web bán hàng. Với sự phong phú về mặt thẩm mĩ. Chúng tôi cung cấp các sản phẩm chất lượng cao với giá cả hợp lý. Hãy cùng khám phá và mua sắm ngay hôm nay!",
        },
    ];
}
export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="dark">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <Meta />
                <Links />
            </head>
            <body>
                {children}
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}

export default function App() {
    // useEffect dùng để chạy logic DOM sau khi component đã render
    useEffect(() => {
        // Select shorthand functions
        const $ = document.querySelector.bind(document);
        const $$ = document.querySelectorAll.bind(document);

        // Check if an element or any of its parents is hidden
        function isHidden(element: Element | null): boolean {
            if (!element) return true;
            if (window.getComputedStyle(element).display === "none") return true;
            let parent = element.parentElement;
            while (parent) {
                if (window.getComputedStyle(parent).display === "none") return true;
                parent = parent.parentElement;
            }
            return false;
        }

        // Debounce to prevent too frequent execution of a function
        function debounce<T extends (...args: any[]) => void>(func: T, timeout = 0) {
            let timer: ReturnType<typeof setTimeout>;
            return (...args: Parameters<T>) => {
                clearTimeout(timer);
                timer = setTimeout(() => {
                    func.apply(null, args);
                }, timeout);
            };
        }

        // Calculate the arrow position for each dropdown menu item
        const calArrowPos = debounce(() => {
            const dropdownList = $(".js-dropdown-list");
            if (isHidden(dropdownList)) return;

            const items = $$(".js-dropdown-list > li");
            items.forEach((item) => {
                const arrowPos = (item as HTMLElement).offsetLeft + (item as HTMLElement).offsetWidth / 2;
                (item as HTMLElement).style.setProperty("--arrow-left-pos", `${arrowPos}px`);
            });
        });

        // Handle menu item activation for hover and click
        const handleActiveMenu = () => {
            const dropdowns = $$(".js-dropdown");
            const menus = $$(".js-menu-list");
            const activeClass = "menu-column__item--active";

            const removeActive = (menu: Element) => {
                menu.querySelector(`.${activeClass}`)?.classList.remove(activeClass);
            };

            const init = () => {
                menus.forEach((menu) => {
                    const items = menu.children;
                    if (!items.length) return;

                    removeActive(menu);

                    // On desktop: make first item active by default
                    if (window.innerWidth > 991) items[0].classList.add(activeClass);

                    Array.from(items).forEach((item) => {
                        (item as HTMLElement).onmouseenter = () => {
                            if (window.innerWidth <= 991) return;
                            removeActive(menu);
                            item.classList.add(activeClass);
                        };
                        (item as HTMLElement).onclick = () => {
                            if (window.innerWidth > 991) return;
                            removeActive(menu);
                            item.classList.add(activeClass);
                            item.scrollIntoView();
                        };
                    });
                });
            };

            init();

            // Reset active state when mouse leaves dropdown
            dropdowns.forEach((dropdown) => {
                (dropdown as HTMLElement).onmouseleave = () => init();
            });
        };

        // Initialize toggle buttons (e.g. show/hide menu)
        const initJsToggle = () => {
            $$(".js-toggle").forEach((button) => {
                const target = button.getAttribute("toggle-target");
                if (!target) {
                    document.body.innerText = `Missing toggle-target for: ${button.outerHTML}`;
                    return;
                }

                button.addEventListener("click", (e) => {
                    e.preventDefault();
                    const targetEl = $(target);
                    if (!targetEl) {
                        document.body.innerText = `Element "${target}" not found`;
                        return;
                    }

                    const isHidden = targetEl.classList.contains("hide");

                    requestAnimationFrame(() => {
                        targetEl.classList.toggle("hide", !isHidden);
                        targetEl.classList.toggle("show", isHidden);
                    });
                });
                document.onclick = function (e) {
                    const eventTarget = e.target as Element | null;
                    if (!eventTarget || !eventTarget.closest(target)) {
                        const targetEl = $(target);
                        const isHidden = targetEl ? targetEl.classList.contains("hide") : true;
                        if (!isHidden) {
                            (button as HTMLElement).click();
                        }
                    }
                };
            });
        };

        //  NEW: Toggle navbar dropdown items on small screens (mobile view)
        const initDropdownClick = () => {
            const links = $$(".js-dropdown-list > li > a");

            links.forEach((link) => {
                (link as HTMLElement).onclick = () => {
                    // Only apply toggle on small screens (≤ 991px)
                    if (window.innerWidth > 991) return;

                    // Toggle the class on the parent <li>
                    const item = link.closest("li");
                    item?.classList.toggle("navbar__item--active");
                };
            });
        };

        // Register event listeners
        window.addEventListener("resize", calArrowPos);
        window.addEventListener("template-loaded", calArrowPos);
        window.addEventListener("template-loaded", handleActiveMenu);
        window.addEventListener("template-loaded", initJsToggle);
        window.addEventListener("template-loaded", initDropdownClick); //  Added listener

        // Run on component mount
        calArrowPos();
        handleActiveMenu();
        initJsToggle();
        initDropdownClick(); //  Run once on mount

        // Clean up event listeners on component unmount
        return () => {
            window.removeEventListener("resize", calArrowPos);
            window.removeEventListener("template-loaded", calArrowPos);
            window.removeEventListener("template-loaded", handleActiveMenu);
            window.removeEventListener("template-loaded", initJsToggle);
            window.removeEventListener("template-loaded", initDropdownClick); //  Clean up
        };
    }, []);
    return (
        <body>
            {/* <header className="header">
                <Header />
            </header> */}
            <main>
                <Outlet />
            </main>
            {/* <footer className="footer">
                <Footer />
            </footer> */}
        </body>
    );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
    let message = "Oops!";
    let details = "An unexpected error occurred.";
    let stack: string | undefined;

    if (isRouteErrorResponse(error)) {
        message = error.status === 404 ? "404" : "Error";
        details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
    } else if (import.meta.env.DEV && error && error instanceof Error) {
        details = error.message;
        stack = error.stack;
    }

    return (
        <main className="pt-16 p-4 container mx-auto">
            <h1>{message}</h1>
            <p>{details}</p>
            {stack && (
                <pre className="w-full p-4 overflow-x-auto">
                    <code>{stack}</code>
                </pre>
            )}
        </main>
    );
}
