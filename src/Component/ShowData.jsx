import { useEffect, useState } from "react";

function ShowData() {

    const [format, setFormat] = useState({
        name: "",
        roll_no: "",
        dept: "",
        phone_no: "",
        role: "",
        reg_no: "",
        image: "",
        gmail: "",
        addres:""
    })

    const [saveformat1, setSaveformat1] = useState({})

    useEffect(() => {
        localStorage.setItem("format", JSON.stringify(format))
        setSaveformat1(format);
    }, [format])

    useEffect(() => {
        const saveval = localStorage.getItem("format");
        if (saveval) {
            setSaveformat1(JSON.parse(saveval));
        }
    }, []);

    const handelchange = (e) => {
        setFormat({ ...format, [e.target.name]: e.target.value });
    }

    const handelchange1 = (e) => {
        const { name, value, files } = e.target;
        if (name === "image" && files.length > 0) {
            const file = files[0];
            const imageUrl = URL.createObjectURL(file);

            setFormat({ ...format, image: imageUrl });
        } else {
            setFormat({ ...format, [name]: value });
        }
    }
    const onClickbutton = () => {
        setFormat({
            name: "",
            roll_no: "",
            dept: "",
            phone_no: "",
            role: "",
            reg_no: "",
            image: "",
            gmail: "",
            addres:""
        });

        localStorage.removeItem("format");
        setSaveformat1({});
    }
return (
    <>

        <div id="topic">
            <h1>Id Generator</h1>
        </div>
        <hr id="line" />

        <div id="first">
            <div id="page1">
                <table cellPadding="16">
                    <tbody>
                        <tr>
                            <td>Name:</td>
                            <td>
                                <input
                                    name="name"
                                    value={format.name}

                                    onChange={handelchange}
                                />
                            </td>
                        </tr>

                        <tr>
                            <td>Roll_No:</td>
                            <td>
                                <input
                                    name="roll_no"
                                    value={format.roll_no}

                                    onChange={handelchange}
                                />
                            </td>
                        </tr>

                        <tr>
                            <td>Dept:</td>
                            <td>
                                <input
                                    name="dept"
                                    value={format.dept}

                                    onChange={handelchange}
                                />
                            </td>
                        </tr>

                        <tr>
                            <td>Phone:</td>
                            <td>
                                <input
                                    type="number"
                                    name="phone_no"
                                    value={format.phone_no}

                                    onChange={handelchange}
                                    style={{ MozAppearance: "textfield" }}
                                />
                            </td>
                        </tr>

                        <tr>
                            <td>Role:</td>
                            <td>
                                <input
                                    name="role"
                                    value={format.role}

                                    onChange={handelchange}
                                />
                            </td>
                        </tr>

                        <tr>
                            <td>Reg No:</td>
                            <td>
                                <input
                                    name="reg_no"
                                    value={format.reg_no}

                                    onChange={handelchange}
                                />
                            </td>
                        </tr>

                        <tr>
                            <td>Email:</td>
                            <td>
                                <input
                                    type="email"
                                    name="gmail"
                                    value={format.gmail}

                                    onChange={handelchange}
                                />
                            </td>
                        </tr>
                         <tr>
                            <td>Addres:</td>
                            <td>
                                <input
                                    type="text"
                                    name="addres"
                                    value={format.addres}

                                    onChange={handelchange}
                                />
                            </td>
                        </tr>



                        <tr>
                            <td>Image:</td>
                            <td>
                                <input type="file" style={{ width: "170px", fontSize: "12px" }} name="image" onChange={handelchange1} />
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div id="buttondiv">
                    <button id="button" onClick={onClickbutton}>Reset</button>
                </div>
            </div>



            <div id="page2">

                <div id="top">
                    {saveformat1.image ? (
                        <img
                            src={saveformat1.image}
                            alt="Uploaded"
                            style={{ width: "150px", height: "160px", objectFit: "cover" }}
                        />
                    ) : (
                        "picture"
                    )}
                </div>
                <div id="middle">
                    <p id="text">{saveformat1.role ? saveformat1.role : "role"}</p>
                    <p  id="text"> {saveformat1.name ? saveformat1.name : "Name"}</p>
                    <p  id="text">{saveformat1.roll_no ? saveformat1.roll_no : "Roll No"}</p>
                    <p  id="text">{saveformat1.reg_no ? saveformat1.reg_no : "Registration No"}</p>
                    <p  id="text">{saveformat1.dept ? saveformat1.dept : "department"}</p>
                    <p id="text">{saveformat1.phone_no ? saveformat1.phone_no : "Phone"}</p>
                    <p  id="text">{saveformat1.addres?saveformat1.addres :"addres"}</p>
                </div>
                <div id="buttom">
                    <p>{saveformat1.gmail ? saveformat1.gmail : "Email"}</p>
                </div>


            </div>
        </div>

    </>
)
}
export default ShowData;