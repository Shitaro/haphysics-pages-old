import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText";

export type SectionNode = {
    type: string;
    text: string;
}

type Props = { sections: SectionNode[] };

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

const TableOfContents: React.FC<Props> = props => {
    const classes = useStyles();
    const { sections } = props;

    return (
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
    )
}

export default TableOfContents;