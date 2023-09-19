import { Helmet } from "react-helmet";
import ErrorBoundray from "../components/ErrorBoundary/ErrorBoundary";
import ProductList from "../components/SEO/ProductList";
import SEO from "../components/SEO/SEO";
import Movie from "../Movies/Movie";
import Users from "../components/Users/Users";
import GroupBy from "../Features/swh/groupBy";

const Home = () => {
  return (
    <>
      <div style={{ margin: "40px", display: "flex" }}>
        <div
          style={{
            margin: "10px",
            padding: "10px",
            width: "25%",
            border: "2px solid",
          }}
        >
          <h2>Home</h2>
          <SEO
            title={"product seo"}
            description={"with react helmet async"}
            name={"personal website"}
            type={"article"}
          />
          <ErrorBoundray>
            <ProductList />
          </ErrorBoundray>
          <Movie />
          <p />
          <Users />
        </div>
        <div
          style={{
            margin: "10px",
            padding: "10px",

            width: "55%",
            border: "2px solid",
          }}
        >
          <GroupBy />
        </div>
      </div>
    </>
  );
};
export default Home;
