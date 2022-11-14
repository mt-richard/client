import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
      <div className="p-10 w-full ">
        <div className="right-[calc(50%-15rem)] p-10 absolute">
          <h1 className="text-9xl font-bold p-10">404</h1>
          <p className="text-2xl font-thin pb-10">The page you are trying to reach was not found</p>
          <Link to="/" className="text-blue-600 font-bold pt-10">Back to Home</Link>
        </div>
      </div>
    );
}
 
export default ErrorPage;