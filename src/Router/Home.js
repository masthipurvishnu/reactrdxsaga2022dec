import { Helmet } from "react-helmet"
import ErrorBoundray from "../components/ErrorBoundary/ErrorBoundary"
import ProductList from "../components/SEO/ProductList"
import SEO from "../components/SEO/SEO"
import Movie from "../Movies/Movie"

const Home = () => {
    return (
        <>
            <h2>Home</h2>
            <SEO title={'product seo'}
                description={'with react helmet async'}
                name={'personal website'}
                type={'article'}
            />
            <ErrorBoundray>
                <ProductList />
            </ErrorBoundray>
            <Movie />
        </>
    )
}
export default Home