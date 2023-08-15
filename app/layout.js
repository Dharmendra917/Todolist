import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "Bootstrap/dist/css/bootstrap.min.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
