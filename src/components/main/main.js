import * as VoxImplant from "voximplant-websdk";
import {CardSection} from "./cards/cards-section";


export const Main = () => {

    const sdk = VoxImplant.getInstance();
    const login = async () => {
        try {
            await sdk.init();
            console.log("SDK is ready!");
            try {
                await sdk.connect();
                console.log("Connected");
            } catch (e) {
                console.log("Connection failed!");
            }
            try {
                await sdk.login("test.amazuhina.n4.voximplant.com","Hyjtvoxy13!");
                console.log("Logged in!");
            } catch (e) {
                console.log("Login failure!");
            }
        } catch (e) {
            console.log("SDK init failure!");
        }
    };


    return (
        <>
            <CardSection/>
        </>
    )
}