import Form from "./pages/Form";
import Button from "./button";
const router = createBrowserRouter ( [
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/form",
        element: <Form />,
    },
]);
const root = ReactDOM.createRoot (document.getElementById("root"));
root.render(<button/>);