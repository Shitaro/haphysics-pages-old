import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText";

export type SectionNode = {
    type: string;
    text: string;
}

type Props = { contents: SectionNode[] };

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        subsection: {
            paddingLeft: theme.spacing(4),
        },
        subsubsection: {
            paddingLeft: theme.spacing(8),
        }
    })
);

const testTree = [
    {
        type: "h2",
        text: "Section",
        children: [
            {
                type: "h3",
                text: "Subsection",
                children: [
                    {
                        type: "h4",
                        text: "副々セクション",
                        children: []
                    }
                ]
            }
        ]
    },
    {
        type: "h2",
        text: "Reference",
        children: []
    }
];

type HogeNode = {
    type: string;
    text: string;
    children?: HogeNode[];
}

type ContentsListProps = {
    items: HogeNode[];
}

const ContentsList: React.FC<ContentsListProps> = ({items}) => (
    <List component="div" disablePadding>
        {items.map(item => {
            const classes = useStyles();
            let padding = "";
            if (item.type === "h3") {
                padding = classes.subsection;
            } else if (item.type === "h4") {
                padding = classes.subsubsection;
            }
            return (
                <>
                    <ListItem button className={padding}>
                        <ListItemText primary={item.text} />
                    </ListItem>
                    {item.children !== undefined ? (
                        <ContentsList items={item.children} />
                    ) : null}
                </>
            )
        })}
    </List>
)

const TableOfContents: React.FC<Props> = props => {
    const classes = useStyles();
    const { contents } = props;
    console.log(testTree)
    console.log(<ContentsList items={testTree} />)

    return (
        <>
        <p>TEST</p>
            <nav>
                <ContentsList items={testTree} />
            </nav>
        <p>END TEST</p>
        <List component="nav">
            <ListItem button>
                <ListItemText primary="セクション" />
            </ListItem>
            <List component="div" disablePadding>
                <ListItem button  className={classes.subsection}>
                    <ListItemText primary="サブセクション" />
                </ListItem>
                <List component="div" disablePadding>
                    <ListItem button className={classes.subsubsection}>
                        <ListItemText primary="副々セクション" />
                    </ListItem>
                </List>
            </List>
            <ListItem button>
                <ListItemText primary="参考文献" />
            </ListItem>
        </List>
        </>
    )
}

export default TableOfContents;