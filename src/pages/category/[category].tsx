import { useRouter } from "next/router";
import { NextPage } from "next";
import Link from "next/link";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { articleList, categoryList } from "../../assets/articleList";

const articleNameList = (category: string): string[] => {
    const articleNameList: string[] = [];
    articleList.filter(article => article.categoryList.includes(category)).forEach(article => {
        articleNameList.push(article.name);
    });
    return articleNameList;
}

const Page: NextPage = () => {
    const router = useRouter();

    const categoryName = categoryList.find(category => category.kebabCase === router.query.category)?.categoryName || router.pathname;

    return (
        <>
            <Container maxWidth="md">
                <Typography component="h1" variant="h2" gutterBottom>
                    Category: {categoryName}
                </Typography>
                {articleNameList(categoryName).map(articleName => {
                    return (
                        <>
                            <Link href={`/articles/${articleName}`} as={`/post/${articleName}`}>
                                <a>Go to {articleName}</a>
                            </Link>
                            <p />
                        </>
                    )
                })}
            </Container>
        </>
    )
}

export default Page;