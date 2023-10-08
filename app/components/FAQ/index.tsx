"use client"
import {Disclosure} from '@headlessui/react'
import {ChevronUpIcon} from '@heroicons/react/20/solid'

const FAQ = () => {
    return (
        <div id="faq-section" className='mx-auto max-w-7xl py-24 lg:px-8 bg-faqblue rounded-2xl my-16 faq-bg'>
            <h3 className='text-xl font-normal text-white text-center mb-6'>FAQ</h3>
            <h2 className='text-4xl lg:text-6xl font-semibold text-center text-white'>ხშირად დასმული <br/> კითხვები.
            </h2>
            <div className="w-full px-4 pt-16">
                <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6 mb-5">
                    <Disclosure>
                        {({open}) => (
                            <>
                                <Disclosure.Button
                                    className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                                    <span>ვინ არიან აკადემიის სტუდენტები?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                        } h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel
                                    className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                                    ჩვენი აკადემიის სტუდენტები ძირითადად არიან ახალგაზრდები, <br/>რომლებიც
                                    რეგიონებში ცხოვრობენ.<br/>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>

                <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6 mb-5">
                    <Disclosure as="div" className="mt-2">
                        {({open}) => (
                            <>
                                <Disclosure.Button
                                    className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                                    <span>რისი სწავლა შემიძლია თქვენს აკადემიაში</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                        } h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel
                                    className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                                    ჩვენს აკადემიაში პროგრამირების და 3D დიზაინის სწავლას
                                    შეძლებ, <br/> თუმცა მომავალში გვინდა დავამატოთ სხვა ციფრული და
                                    მოთხოვნადი<br/> პროფესიები.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>

                <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6">
                    <Disclosure as="div" className="mt-2">
                        {({open}) => (
                            <>
                                <Disclosure.Button
                                    className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                                    <span>რას მომცემს თქვენი კურსების გავლა?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                        } h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel
                                    className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                                    ჩვენი კურსების გავლის შემდეგ გექნება სრულყოფილი საბაზისო ცოდნა კონკრეტული
                                    მიმართულების შესახებ, <br/> ასევე შეგეძლება დამოუკიდებლად
                                    შეასრულო სხვადასხვა სირთულის პროექტები. <br/> რაც მთავარია, ზუსტად გეცოდინება რას
                                    მოიცავს მიმართულება და გინდა თუ არა ამ სფეროსთვის შენი მომავლის დაკავშირება.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>

            </div>
        </div>
    )
}

export default FAQ;
