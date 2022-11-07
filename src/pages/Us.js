import { useEffect, useState } from "react";


const Us = () => {
    const [ourDate, setOurDate] = useState(null)

    // let day = new Date();
    // let hour = day.getHours();
    // console.log(hour);
    // // console.log(ourDate)
    // // const days = useRef(537);

    useEffect(() => {
        const fetchDate = async () => {
            const response = await fetch('/api/dates')
            const json = await response.json()
            if (response.ok) {
                setOurDate(json)
            }
        }
        // if (hour === 22) {
        //     let newdate = json.date
        //     const newDate = await Date.findByIdAndUpdate({ _id: "635e210cb247e28c26975e7c" }, {})
        // }
        fetchDate();
    }, [])

    return (
        <div className="container-us">
            <div className="images">
                <img className="ourpico1" src="https://dsm01pap007files.storage.live.com/y4mioVGPA7kMHpNA_ZTIIWLX3-83E9nU62kqq9pI4amBPkqJvuepSXc3Kz0WPxR_6uoKIAVe7lOTAuRw7S5_I7VpznuX9__XVfprjP5M9BDhLws-q4Ux7k_p3dVNeGsgHDOkJePdUSULsmPo9yNuX5zSOv33GYt1Q4B92DRsxinquPpxn7XjUofVrlzx7rP29Bl?width=524&height=556&cropmode=none" alt="" />
                <img className="heart" src="https://dsm01pap007files.storage.live.com/y4mWZYIethUduT28l__eaSfOuEeZEs1W9JVRSIEElqrjPxOE6jRdAsu7eyHotF94OkWiUKwpGcWWgWpadVMUvgZlUIFHwa5saVWOkm0nGHRkssY0QbNiR-yda53Pq7fjzwHeUBsZVT62GuL2DACSp-oF5Q0KICL0RE4mYshiVl0ROH1e1Ui5vsHrU_zO68n1Z9L?width=335&height=334&cropmode=none" alt="" />
                <img className="ourpico2" src="https://dsm01pap007files.storage.live.com/y4mqxbqWJtpGhav4sG65u48GzWdCLit_zC5W8gs4BasCrDINmX2HXHAEYZwtNV7G6Y5T5h6PH37HNk0DGfzcav-wMLQvsWuXhciGSQVqiVVwfL5J1EcS1BPKLp7xLYwrZcYLi0RfdTIkCPfpY1kBoLyKLz6cE2WZ_EQCRd4JOFtYChCpJ2NVwh7HcHhZk5FZzGf?width=524&height=556&cropmode=none" alt="" />
            </div>
            {ourDate && ourDate.map((ourdate) => {
                return <p className="us1" key={ourdate._id}>We have been dating for {ourdate.date} days now UwU</p>
            })}

            <p className="us2">~ To meet ur soulmate at such a young age, there is no greater miracle than that ~</p>

        </div>
    );
}

export default Us;