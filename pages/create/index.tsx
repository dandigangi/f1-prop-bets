import type { NextPage } from 'next';
import { Formik } from 'formik';
import styles from './Create.module.css';

const CreateBetPage: NextPage = () => {
    return (
        <div>
            <h1>Create New Bet</h1>
            <div className={styles.columns}>
                <div className={styles.column}>
                    <Formik>
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting,
                        }) => (
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor='betName'>Bet Name</label>
                                    <br />
                                    <input
                                        type='text'
                                        name='betName'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </div>
                                <br />
                                <div>
                                    <label htmlFor='betName'>Template</label>
                                    <br />
                                    <select onChange={handleChange}>
                                        <option>Default</option>
                                    </select>
                                </div>
                                <br />
                                <button type='submit' disabled={isSubmitting}>
                                    Submit
                                </button>
                            </form>
                        )}
                    </Formik>
                </div>
                <div className={styles.column}>
                    <h2>Previewer Here</h2>
                </div>
            </div>
        </div>
    );
};

export default CreateBetPage;
