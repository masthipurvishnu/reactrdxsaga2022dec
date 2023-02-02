import { Tab, Tabs } from "@mui/material"
import { Link, Routes, Route, BrowserRouter as Router } from "react-router-dom"
import Post from "../components/Blogs/PostDetails"
import PostLists from "../components/Blogs/PostLists"
import Posts from "../components/Blogs/Posts"
import Counter from "../components/Counter/Counter"
import CounterComponent from "../components/Counter/CounterComponent"
import Dog from "../components/Dog"
import Header from "../components/Header"
import Search from "../components/Search/Search"
import Shop from "../Features/Shop/Shop"
import Stream from "../Stream/Stream"
import About from "./About"
import Home from "./Home"
import UserDetails from "./UserDetails"
import Users from "./Users"

const AppRouter = () => {

    return (
        <>
            <Router>
                <div className='App'>
                    <Header />
                </div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path='/posts' element={<Posts />} >
                        <Route path="/posts/" element={<PostLists />} />
                        <Route path=":slug" element={<><PostLists /><Post /></>} />
                    </Route>
                    <Route path='/shop' element={<Shop />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/users" element={<Users />} >
                        <Route
                            path="details"
                            element={<UserDetails />}
                            handle={{
                                crumb: () => <Link to="/details">Details</Link>
                            }}
                        />
                    </Route>
                    <Route path={'/search'} element={<Search />} />
                    <Route path={'/stream'} element={<Stream />} />
                    <Route path={'/dogs'} element={<Dog />} />
                    <Route path={'/counter'} element={<CounterComponent />} />
                </Routes>
            </Router>
        </>
    )
}
export default AppRouter