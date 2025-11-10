import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// for validation
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import MobileInput from "../../components/mobileInput";

const validationSchema = Yup.object({
    email: Yup.string().email("Invalid Email").required("Email is Required"),
    fullname: Yup.string().required("Name is Required"),
    whatsapp : Yup.string().required("Whatsapp is Required"),
    phone : Yup.string().required("Phone is Required"),
    address: Yup.string(),
    service: Yup.string(),
    note: Yup.string(),
});
interface FormValues {
  fullname: string;
  email: string;
  phone: string;
  whatsapp: string,
  service?: string,
  address?: string,
  note?: string;
}
interface FormEmail {
    body: string,
    adminEmail: string,
    userEmail: string,
    subject: string
}

const DetailsStep = () => {
    const navigate = useNavigate()
    const stored = localStorage.getItem("values");
    const values = stored ? JSON.parse(stored) : null;
    const [codeValues, setCodeValues] = useState({
        phone: "+971",
        whatsapp: "+971"
    })
    const [ loading, setLoading ] = useState(false)
    useEffect(()=>{
        if(!values) navigate("/")
    },[])
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema),
            mode: 'onChange'
    });

    const onSubmit = async(value:FormValues)=>{
        setLoading(true)
        const temp: {
            body: string;
            userEmail: string;
            adminEmail: string;
            subject: string;
        } = {
            body: `<div style="margin:auto;width: 500px;color:#0B081D; border-radius:12px;background-color: white;border: 1px solid #0B081D;font-family: Arial, sans-serif;">
                    <!-- Header -->
                    <div style="background: #EFEAE6;border-top-left-radius:12px;border-top-right-radius:12px;padding:10px;">
                        <div style="margin: auto;text-align: center;">
                            <img style="height: 100px;" src="https://appointments.arizglobal.com/qilume.png" alt="aqilume   -logo" />
                        </div>
                    </div>

                    <!-- Body Content -->
                    <div style="padding: 20px;">
                        <h1 style="text-align: center; color: #C3996B; margin-bottom: 0;">Book an Appointment</h1>
                        <p>Dear Qilume Team,</p>
                        <p>Someone has booked an appointment for Qilume Clinic. Here are the details:</p>
                        <p style="padding:10px;border:1px solid green; border-radius: 8px; text-align:center" >
                            Date Selected: ${values?.date } at ${values?.time}
                            <br/> The Main Service Selected is : ${values?.service} 
                        </p>
                        <!-- Stylish Table -->
                        <table style="width: 100%; border-collapse: collapse; margin-top: 15px; color: #0B081D;">
                            <tr style="background-color: #F6F6F6;">
                                <td style="padding: 10px; font-weight: bold; border: 1px solid #DDD;">Name</td>
                                <td style="padding: 10px; border: 1px solid #DDD;">${value.fullname}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; font-weight: bold; border: 1px solid #DDD;">Email</td>
                                <td style="padding: 10px; border: 1px solid #DDD;">${value.email}</td>
                            </tr>
                            <tr style="background-color: #F6F6F6;">
                                <td style="padding: 10px; font-weight: bold; border: 1px solid #DDD;">Phone</td>
                                <td style="padding: 10px; border: 1px solid #DDD;"> ${"( " + codeValues.phone +" ) "+ value.phone}</td>
                            </tr>
                            <tr style="background-color: #F6F6F6;">
                                <td style="padding: 10px; font-weight: bold; border: 1px solid #DDD;">Whatsapp</td>
                                <td style="padding: 10px; border: 1px solid #DDD;"> ${"( " + codeValues.whatsapp +" ) "+ value.whatsapp}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; font-weight: bold; border: 1px solid #DDD;">Address</td>
                                <td style="padding: 10px; border: 1px solid #DDD;">${value.address}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; font-weight: bold; border: 1px solid #DDD;">Service</td>
                                <td style="padding: 10px; border: 1px solid #DDD;">${value.service}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; font-weight: bold; border: 1px solid #DDD;">Notes</td>
                                <td style="padding: 10px; border: 1px solid #DDD;">${value.note}</td>
                            </tr>
                        </table>

                        <div style="margin-top: 20px;">
                            <p style="margin: 0;">Best regards,</p>
                            <p style="margin: 0;">Ariz Global Team</p>
                        </div>
                    </div>

                    <!-- Button -->
                    <div style="text-align: center; padding-bottom: 20px;">
                        <a href="https://arizglobal.com/" target="_blank">
                            <button style="background-color: #C3996B; cursor: pointer; color: white; border: none; padding: 10px 20px; border-radius: 12px;">Go to Ariz Global</button>
                        </a>
                    </div>
                </div>`,
            userEmail: value.email,
            adminEmail: "maha.assi@arizglobal.com" ,
            subject : "New Book Appointment"
        }
        const adminTemplate = { ...temp, adminEmail: "majid@arizglobal.com" };
        const clientTemplate = { ...temp, adminEmail: "eng.mahaab96@gmail.com" };
        const userTemplate = {
            ...temp,
            adminEmail: value.email,
            subject: "Your Appointment Confirmation",
            body: `<div style="margin:auto;width: 500px;color:#0B081D; border-radius:12px;background-color: white;border: 1px solid #0B081D;font-family: Arial, sans-serif;">
                    <!-- Header -->
                    <div style="background: #EFEAE6;border-top-left-radius:12px;border-top-right-radius:12px;padding:10px;">
                        <div style="margin: auto;text-align: center;">
                            <img style="height: 100px;" src="https://appointments.arizglobal.com/qilume.png" alt="aqilume   -logo" />
                        </div>
                    </div>

                    <!-- Body Content -->
                    <div style="padding: 20px;">
                        <p>Dear ${value.fullname},</p>
                        <p>Thank you for booking your appointment with Qilume Clinic!</p>
                        <p>We’ve received your request for <strong>${values?.service}</strong> on 
                        <strong>${values?.date}</strong> at <strong>${values?.time}</strong>.</p>
                        <p>Our team will contact you soon to confirm the details.</p>
                        <p>Best regards,<br/>Qilume Clinic Team</p>
                    </div>

                    <!-- Button -->
                    <div style="text-align: center; padding-bottom: 20px;">
                        <a href="https://arizglobal.com/" target="_blank">
                            <p style="text-decoration: underline;color:#C3996B">Powered by Ariz Global</p>
                        </a>
                    </div>
                </div>`
        };
        await templateSend(adminTemplate);
        await templateSend(clientTemplate);
        await templateSend(userTemplate);
        setLoading(false);
        navigate("/confirmation");
        localStorage.removeItem("values")
        localStorage.setItem("confirm","true")
    }

    const templateSend = async(temp:FormEmail)=>{
        const res = await fetch("https://api.arizglobal.com/api/mail", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(temp),
        });
        const data = await res.json();
        if (data.success) {
          
        }else{
            
        }
    }
    return (<div className="flex flex-col gap-10 ">
        <div className="flex flex-col gap-5 items-center ">
            <h2 className="font-medium text-md md:text-xl text-center">Selected Appointment</h2>
            <div className="border rounded-xl p-2 border-[var(--yellow-2)] w-full text-center text-[var(--yellow-2)] font-bold text-lg">
                {values?.date} at {values.time}
        
            </div>

        </div>
        <div className="flex flex-col gap-5 items-center w-full">
            <h2 className="font-medium text-md md:text-xl text-center">Please enter your details</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-3">
                <div className="grid sm:grid-cols-2 gap-3">
                    <div className="flex flex-col gap-1">
                        <label>Full Name:<span className="required">*</span></label>
                        <input {...register("fullname")} type="text" placeholder={"Full Name"}  />
                        {errors.fullname && <p className="pt-0.5 text-error">{errors.fullname.message}</p>}
                    </div>
                    <div className="flex flex-col gap-1">
                        <label>Email:<span className="required">*</span></label>
                        <input {...register("email")} type="text" placeholder={"Email"}  />
                        {errors.email && <p className="pt-0.5 text-error">{errors.email.message}</p>}
                    </div>
                </div>
                 <div className="grid sm:grid-cols-2 gap-3">
                    <div className="flex flex-col gap-1">
                        <label>Phone:<span className="required">*</span></label>
                         <MobileInput  register={register("phone")} returnedCountry={(res)=>{setCodeValues(prev=>({...prev,phone:res.dial_code}))}} />
                        {errors.phone && <p className="pt-0.5 text-error">{errors.phone.message}</p>}
                    </div>
                    <div className="flex flex-col gap-1">
                        <label>Whatsapp:<span className="required">*</span></label>
                        <MobileInput  register={register("whatsapp")} returnedCountry={(res)=>{setCodeValues(prev=>({...prev,whatsapp:res.dial_code}))}} />
                        {errors.whatsapp && <p className="pt-0.5 text-error">{errors.whatsapp.message}</p>}
                    </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                    <div className="flex flex-col gap-1">
                        <label>Service:</label>
                        <input {...register("service")} type="text" placeholder={"Service"}  />
                        {errors.service && <p className="pt-0.5 text-error">{errors.service.message}</p>}
                    </div>
                    <div className="flex flex-col gap-1">
                        <label>Address:</label>
                        <input {...register("address")} type="text" placeholder={"Address"}  />
                        {errors.address && <p className="pt-0.5 text-error">{errors.address.message}</p>}
                    </div>
                </div>
                <div className="gap-3">
                    <div className="flex flex-col gap-1">
                        <label>Anything else:<span className="required">*</span></label>
                        <textarea {...register("note")} className="w-full"  placeholder={"Type..."}  />
                        {errors.note && <p className="pt-0.5 text-error">{errors.note.message}</p>}
                    </div>
                </div>
                <div>
                    <button disabled={loading} className="w-full dark-btn">{loading?<div className="spinner"></div> : "Submit"}</button>
                </div>
                 
            </form>
        </div>
    </div>)
}   
export default DetailsStep;