import React from "react";
import {
    Box,
    Button,
    Modal,
    Rating,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import { router, usePage } from "@inertiajs/react";

const ReviewModal = ({ open, onClose }) => {
    const { props } = usePage();
    const [reviewData, setReviewData] = React.useState({
        rating: 0,
        comment: "",
        product: props.product.id,
    });

    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 600,
                    bgcolor: "background.paper",
                    boxShadow: "custom.card",
                    p: "20px",
                    borderRadius: "16px",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                }}
            >
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Add Review
                </Typography>
                <Stack gap="20px">
                    <Stack gap="8px" paddingBottom="12px">
                        <Typography
                            id="modal-modal-description"
                            variant="body2"
                        >
                            Your review about this product:
                        </Typography>
                        <Rating
                            value={reviewData.rating}
                            onChange={(e, newValue) =>
                                setReviewData({
                                    ...reviewData,
                                    rating: newValue,
                                })
                            }
                        />
                    </Stack>
                    <TextField
                        multiline
                        minRows={3}
                        label="Review"
                        color="custom"
                        value={reviewData.comment}
                        onChange={(e) =>
                            setReviewData({
                                ...reviewData,
                                comment: e.target.value,
                            })
                        }
                    />
                    <Stack direction="row" justifyContent="end" gap="12px">
                        <Button
                            variant="outlined"
                            color="inherit"
                            onClick={onClose}
                        >
                            Cancel
                        </Button>
                        <Button
                            variant="contained"
                            color="inherit"
                            onClick={() =>
                                router.post("/reviews", reviewData, {
                                    preserveScroll: true,
                                    preserveState: true,
                                    onSuccess: onClose,
                                })
                            }
                        >
                            Post
                        </Button>
                    </Stack>
                </Stack>
            </Box>
        </Modal>
    );
};

export default ReviewModal;
