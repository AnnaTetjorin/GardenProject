import { useForm } from 'react-hook-form';
import style from './DataCartForm.module.css';
import {Button} from '../Button/Button';




export const DataCartForm = () => {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitSuccessful },
    } = useForm({ defaultValues: {} });

    return (
        <div className={style.divFormWrapper}>
            <div>
                <h2 className={style.order}>Order details</h2>
                <p className={style.itemCounter}>3 item</p>
                <div className={style.totalPrice}>
                    <p className={style.total}>Total</p>
                    <p className={style.price}>$555,19</p>
                </div>
            </div>
            <form className={style.formWrapper}>
                <input
                    className={style.allThreeInputs}
                    type="text"
                    placeholder="Name"
                    id="name"
                    {...register("firstName", {
                        required: "Please fill the field",
                        minLength: {
                            value: 4,
                            message: "Your name should have more than 4 Letters",
                        },
                        maxLength: {
                            value: 10,
                            message: "Your name should have less than 10 Letters",
                        },
                    })}
                />
                <input
                    className={style.allThreeInputs}
                    type="tel"
                    placeholder="Phone number"
                    id="phone"
                    {...register("phone", {
                        required: true,
                        pattern: {
                            value:
                                /(\(?([\d \-\)\–\+\/\(]+){6,}\)?([ .\-–\/]?)([\d]+))/g,
                            message: "It is not a german number",
                        },
                    })}
                />
                <input
                    className={`${style.allThreeInputs} ${style.lastInput}`}
                    type="email"
                    placeholder="Email"
                    id="email"
                    {...register("email", {
                        required: true,
                        pattern: {
                            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                            message: "It is not a right email",
                        },
                    })}
                />
                <Button buttonClass={'primary'} text={'Order'}/>
            </form>
        </div>
    )
}