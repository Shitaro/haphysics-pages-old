import { useRouter } from "next/router";
import { NextPage } from "next";
import { articleList } from "../../assets/articleList";

const Page: NextPage = () => {
    const router = useRouter();
    const categories = articleList.filter((item, index) => {
        if (item.categoryList.find( value => value === "Hello world")) {
            return true;
        }
        return false;
    })
    console.log(categories)

    return (
        <>
            <p>{router.query.category}</p>
        </>
    )
}

export default Page;