import Image from "next/image";

const Digital = () => {
    return (

        <div className="mx-2">
            <div className='mx-auto max-w-7xl px-4 my-40 pb-20 lg:pb-40 lg:px-8 bg-digital rounded-3xl bg-blue relative'>
                <div className='grid grid-cols-1 lg:grid-cols-2 my-16'>
                    {/* COLUMN-1 */}
                    <div className="pt-24 lg:pl-24 ">
                        <h3 className="text-lg font-normal text-white mb-5 tracking-widest text-center lg:text-start">Leaders Academy</h3>
                        <h4 className="sm:text-2xl lg:text-3xl  font-bold text-white mb-8 lg:leading-normal text-center lg:text-start">ჩვენ სპეციალიზირებულნი ვართ <br /> 3D მხატვრობისა და ვებ პროგრამირების უნარების <br />  შესწავლასა და განვითარებაში.</h4>
                        <div className="text-center lg:text-start">
                            <button className="text-xl font-semibold text-white bg-btnblue py-4 px-12 hover:bg-hoblue rounded-full">Get started</button>
                        </div>
                    </div>

                    {/* COLUMN-2 */}

                    <div>
                        <div className="lg:absolute girldoodle">
                        </div>
                    </div>


                </div>
                {/*<Image src="/images/custom/success-way.jpg" alt="girldoodle" width={*/}
                {/*    1920*/}
                {/*}*/}
                {/*    height={*/}
                {/*        1080*/}
                {/*    }*/}
                {/*/>*/}

            </div>
        </div>
    )
}

export default Digital;
