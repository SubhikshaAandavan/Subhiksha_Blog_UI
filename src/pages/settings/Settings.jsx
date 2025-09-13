import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"

export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">   
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form  className="settingsForm">
                    <label >
                        Profile Picture
                    </label>
                    <div className="settingsPP">
                        <img src="https://images.pexels.com/photos/33272752/pexels-photo-33272752.jpeg" alt="" width="100%" height="400px"/>
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon fa-solid fa-user"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display:"none"}} />
                    </div>
                <label >Username</label>
                <input type="text" placeholder="Subhiksha A"/>
                <label >Email</label>
                <input type="text" placeholder="subhi@gmail.com"/>
                <label >Password</label>
                <input type="password"/>
                <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <Sidebar />

        </div>
    )
}
