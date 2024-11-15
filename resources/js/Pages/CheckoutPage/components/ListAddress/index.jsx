import { ThemeContext } from "@/Context/context";
import { typography } from "@/Theme/elements/typography";
import { Icon } from "@iconify/react";
import { router, usePage } from "@inertiajs/react";
import {
    Box,
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormLabel,
    InputLabel,
    MenuItem,
    Modal,
    Radio,
    RadioGroup,
    Select,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import axios from "axios";
import React from "react";

const ListAddress = ({ backAction, setStep, order, setOrder }) => {
    const { props } = usePage();
    const cities = props.cities;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [address, setAddress] = React.useState({
        city: "",
        district: "",
        ward: "",
        address: "",
        type: "Home",
        default: false,
    });

    const getDistricts = (nameCity) => {
        return cities.filter((it) => it.name === nameCity)[0].districts;
    };

    const getWards = (nameCity, nameDistrict) => {
        return cities
            .filter((it) => it.name === nameCity)[0]
            .districts.filter((it) => it.name === nameDistrict)[0].wards;
    };

    React.useEffect(() => {
        console.log(props.addresses);
    }, []);

    const addAdress = () => {
        router.post(route("addresses.store"), address, {
            onSuccess: () => {
                router.visit(route("?step=1"));
            },
        });
    };

    React.useEffect(() => {
        console.log(order);
    }, []);

    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Stack
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 600,
                        bgcolor: "background.paper",
                        boxShadow: "custom.card",
                        borderRadius: "16px",
                        p: 4,
                        gap: "24px",
                    }}
                >
                    <Typography id="modal-modal-title" variant="h6">
                        New Address
                    </Typography>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        value={address.type}
                        onChange={(e) => {
                            setAddress({ ...address, type: e.target.value });
                        }}
                    >
                        <FormControlLabel
                            value="Home"
                            control={<Radio />}
                            label="Home"
                        />
                        <FormControlLabel
                            value="Office"
                            control={<Radio />}
                            label="Office   "
                        />
                    </RadioGroup>
                    <Stack direction={"row"} gap={"16px"}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                                City
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={address.city}
                                label="City"
                                onChange={(event) => {
                                    setAddress({
                                        ...address,
                                        city: event.target.value,
                                    });
                                }}
                            >
                                {cities.map((city) => (
                                    <MenuItem value={city.name} key={city}>
                                        {city.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <FormControl fullWidth disabled={address.city == ""}>
                            <InputLabel id="demo-simple-select-label">
                                District
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={address.district}
                                label="District"
                                onChange={(event) => {
                                    setAddress({
                                        ...address,
                                        district: event.target.value,
                                    });
                                }}
                            >
                                {address.city != "" &&
                                    getDistricts(address.city).map(
                                        (district) => (
                                            <MenuItem
                                                value={district.name}
                                                key={district}
                                            >
                                                {district.name}
                                            </MenuItem>
                                        )
                                    )}
                            </Select>
                        </FormControl>
                        <FormControl
                            fullWidth
                            disabled={address.district == ""}
                        >
                            <InputLabel id="demo-simple-select-label">
                                Ward
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={address.ward}
                                label="Age"
                                onChange={(event) => {
                                    setAddress({
                                        ...address,
                                        ward: event.target.value,
                                    });
                                }}
                            >
                                {address.city != "" &&
                                    address.district != "" &&
                                    getWards(
                                        address.city,
                                        address.district
                                    ).map((ward) => (
                                        <MenuItem value={ward.name} key={ward}>
                                            {ward.name}
                                        </MenuItem>
                                    ))}
                            </Select>
                        </FormControl>
                    </Stack>
                    <TextField
                        fullWidth
                        label="Address"
                        value={address.address}
                        onChange={(e) =>
                            setAddress({ ...address, address: e.target.value })
                        }
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={address.default}
                                onChange={(e) => {
                                    setAddress({
                                        ...address,
                                        default: e.target.checked,
                                    });
                                }}
                            />
                        }
                        label="Use this address as default."
                    />
                    <Stack
                        direction={"row"}
                        justifyContent={"end"}
                        gap={"16px"}
                    >
                        <Button variant="outlined" color="inherit">
                            Cancel
                        </Button>
                        <Button
                            variant="contained"
                            color="inherit"
                            onClick={addAdress}
                        >
                            Deliver to this address
                        </Button>
                    </Stack>
                </Stack>
            </Modal>
            <Stack gap={"32px"}>
                {props.addresses.map((addressItem) => (
                    <Box
                        key={addressItem}
                        sx={{
                            borderRadius: "16px",
                            boxShadow: "custom.card",
                            padding: "24px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "12px",
                        }}
                    >
                        <Stack
                            direction={"row"}
                            gap={"8px"}
                            alignItems={"center"}
                        >
                            <Typography variant="subtitle2">
                                {addressItem.user.first_name}{" "}
                                {addressItem.user.last_name}
                            </Typography>
                            <Typography variant="body2">
                                ({addressItem.type})
                            </Typography>
                            {addressItem.default && (
                                <Typography
                                    variant="captiontext"
                                    sx={{
                                        backgroundColor: "info.lighter",
                                        padding: "2px 6px",
                                        borderRadius: "4px",
                                        fontWeight: 600,
                                    }}
                                    color={"info.dark"}
                                >
                                    Default
                                </Typography>
                            )}
                        </Stack>
                        <Typography variant="body2" color={"text.secondary"}>
                            {addressItem.address}/{addressItem.ward}/
                            {addressItem.district}/{addressItem.city}
                        </Typography>
                        <Stack
                            direction={"row"}
                            alignItems={"center"}
                            gap={"8px"}
                        >
                            <Typography
                                variant="body2"
                                color={"text.secondary"}
                            >
                                +1 202-555-0143
                            </Typography>
                            <div className="flex-1"></div>
                            <Button color="error">Delete</Button>
                            <Button
                                variant="outlined"
                                color="inherit"
                                onClick={() => {
                                    setOrder({
                                        ...order,
                                        address: addressItem,
                                    });
                                    setStep(2);
                                }}
                            >
                                Deliver to this address
                            </Button>
                        </Stack>
                    </Box>
                ))}
            </Stack>
            <Stack direction={"row"} marginTop={"32px"} alignItems={"center"}>
                <Button
                    color="inherit"
                    startIcon={
                        <Icon
                            icon="eva:arrow-back-fill"
                            width="28"
                            height="28"
                        />
                    }
                    onClick={() => backAction()}
                >
                    Back
                </Button>
                <div className="flex-1"></div>
                <Button
                    color="success"
                    startIcon={<Icon icon="eva:plus-fill" />}
                    onClick={handleOpen}
                >
                    New address
                </Button>
            </Stack>
        </>
    );
};

export default ListAddress;
