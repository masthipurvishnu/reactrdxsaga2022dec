import { Box, Tab, Tabs } from "@mui/material";
import { Link, Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Post from "../components/Blogs/PostDetails";
import PostLists from "../components/Blogs/PostLists";
import Posts from "../components/Blogs/Posts";
import Counter from "../components/Counter/Counter";
import CounterComponent from "../components/Counter/CounterComponent";
import Dog from "../components/Dog";
import Header from "../components/Header";
import Search from "../components/Search/Search";
import Shop from "../Features/Shop/Shop";
import Stream from "../Stream/Stream";
import About from "./About";
import Home from "./Home";
import UserDetails from "./UserDetails";
import Users from "./Users";
import LeftNavigation from "../components/LeftNavigation";

const AppRouter = () => {
  return (
    <>
      <Router>
        <div
          style={{
            display: "grid",
            gridTemplateAreas: `
                'header header header header header header'
                'menu main main main right right'
                'menu footer footer footer footer footer'`,
            gap: "10px",
            // backgroundColor: "#2196F3",
            padding: "10px",
          }}
          className="App"
        >
          <div style={{ border: "2px solid", gridArea: "header" }}>
            <Header />
          </div>
          <div style={{ border: "1px solid", gridArea: "menu" }}>
            <LeftNavigation />
          </div>
          <div style={{ border: "1px solid", gridArea: "main" }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/posts" element={<Posts />}>
                <Route path="/posts/" element={<PostLists />} />
                <Route
                  path=":slug"
                  element={
                    <>
                      <PostLists />
                      <Post />
                    </>
                  }
                />
              </Route>
              <Route path="/shop" element={<Shop />} />
              <Route path="/about" element={<About />} />
              <Route path="/users" element={<Users />}>
                <Route
                  path="details"
                  element={<UserDetails />}
                  handle={{
                    crumb: () => <Link to="/details">Details</Link>,
                  }}
                />
              </Route>
              <Route path={"/search"} element={<Search />} />
              <Route path={"/stream"} element={<Stream />} />
              <Route path={"/dogs"} element={<Dog />} />
              <Route path={"/counter"} element={<CounterComponent />} />
            </Routes>
          </div>
          <div style={{ border: "1px solid", gridArea: "right" }}>
            <Box>Right</Box>
          </div>
          <div style={{ border: "1px solid", gridArea: "footer" }}>
            <Box>Footer</Box>
          </div>
        </div>
      </Router>
    </>
  );
};
export default AppRouter;
