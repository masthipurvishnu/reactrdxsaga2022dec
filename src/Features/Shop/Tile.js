import { Button, Card, CardMedia, Chip, Dialog, DialogContent, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import Icon from '@mui/material/Icon';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { PropTypes } from "prop-types";
import { Component } from "react";
import StarIcon from '@mui/icons-material/Star';
import PeopleViewed from "./PeopleViewed";

class Tile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isDialogOpen: false
        }
        this.showFullImage.bind(this);
    }
    handleClose() {
        this.setState({ isDialogOpen: false })
    }
    showFullImage() {
        this.setState({ isDialogOpen: true })
    }
    getRates(item) {
        const rate = Math.round(item.rating.rate)
        let rateElement = []
        for (let i = 0; i < rate; i++) {
            rateElement.push(<StarIcon key={i} style={{ color: 'orange', width: '10%', height: '10%' }} />)
        }
        // rateElement.push(<Chip style={{ width: '15%', height: '10%', marginBottom: 8 }} label={rate} variant="outlined"></Chip>)
        return rateElement
    }
    componentDidMount() {
        // console.log('componentDidMount - ', this.state.isDialogOpen);
    }
    componentDidUpdate() {
        // console.log('componentDidUpdate - ', this.state.isDialogOpen);
    }

    render() {
        const { item } = this.props
        if (item?.length <= 0) return <>No records</>
        return (
            <>
                <Card
                    sx={{ width: 250, height: 350, paddingLeft: 1 }}>
                    <List>
                        <ListItem>
                            <ListItemButton
                                sx={{ width: 150, height: 150 }}
                                onClick={this.showFullImage.bind(this)}>
                                <CardMedia
                                    component="img"
                                    image={item?.image}
                                />
                            </ListItemButton>
                            <ListItemText>
                                <span style={{ fontWeight: 'bold', paddingLeft: 5 }}>
                                    {'$' + item.price}
                                </span>
                                <Button variant="contained" sx={{ borderRadius: 6 }}>
                                    <AddShoppingCartIcon sx={{ paddingLeft: 0 }} />
                                </Button>
                            </ListItemText>

                        </ListItem>
                        <ListItem>
                            <div>{item?.title}</div>
                        </ListItem>
                        <ListItem>
                            <PeopleViewed views={Math.round(Math.random() * 10000)} />
                        </ListItem>
                        <ListItem>
                            {this.getRates(item)}
                        </ListItem>
                    </List>
                    <Dialog
                        open={this.state.isDialogOpen}
                        onClose={this.handleClose.bind(this)}
                        style={{ border: '3px solid green' }}
                    >
                        <DialogContent style={{ display: 'contents', border: '3px solid red' }}>
                            <img
                                style={{ border: '13px solid green' }} src={item?.image} />
                        </DialogContent>
                    </Dialog>
                </Card>
            </>
        )
    }
}
Tile.propTypes = {
    item: PropTypes.object
}
export default Tile