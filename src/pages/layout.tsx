import StyledComponentsRegistry from "./registry"


export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    console.log("RootLayout");
    return (
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    )
}