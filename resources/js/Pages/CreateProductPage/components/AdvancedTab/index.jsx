import {
    Box,
    Button,
    Card,
    Input,
    OutlinedInput,
    Paper,
    Stack,
    Typography,
} from "@mui/material";
import React from "react";
import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import { EditorProvider, useCurrentEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import EditorTiptap from "@/Components/EditorTiptap";

const AdvancedTab = ({ product, setProduct }) => {
    const [content, setContent] = React.useState(``);

    React.useEffect(() => {
        console.log(content.toString());
    }, [content]);

    return (
        <Stack
            sx={{
                paddingTop: "20px",
                gap: "28px",
                "& .MuiInputBase-input.MuiOutlinedInput-input": {
                    fontSize: 14,
                },
            }}
        >
            <Card>
                <Stack gap={"20px"}>
                    <Typography variant="h6">Stock</Typography>
                    <Stack gap={"8px"}>
                        <Typography variant="subtitle2">Quantity</Typography>
                        <OutlinedInput
                            size="small"
                            color="custom"
                            fullWidth
                            placeholder="Enter product quantity..."
                            type="number"
                            value={product?.quantity}
                            onChange={(e) =>
                                setProduct({
                                    ...product,
                                    quantity: e.target.value,
                                })
                            }
                        />
                        <Typography
                            variant="captiontext"
                            color={"text.disabled"}
                        >
                            Enter the product quantity.
                        </Typography>
                    </Stack>
                </Stack>
            </Card>
            <Card>
                <Stack gap={"20px"}>
                    <Typography variant="h6">Feature</Typography>
                    <Stack gap={"8px"}>
                        <Typography variant="subtitle2">Content</Typography>
                        <EditorTiptap
                            setContent={setContent}
                            product={product}
                            setProduct={setProduct}
                        />
                    </Stack>
                </Stack>
            </Card>
        </Stack>
    );
};

export default AdvancedTab;
