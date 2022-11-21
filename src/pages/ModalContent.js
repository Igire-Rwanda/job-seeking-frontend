import React from 'react'

const ModalContent = () => {
    return (
        <div className='w-[650px] overflow-y-auto h-[500px]'>
            <h2 className='pt-4 text-2xl'>Job Title  </h2><hr /><span>Dec 12th, 2021</span>

            <div>
                <h3 className='pt-4 pb-4'>Job Description</h3>
                <p>We are hiring for a highly skilled Backend Developer
                    professional to join our team in Rwanda. If you're excited to be part of
                    an excellent startup team, AmaliTech is a great place to grow your career.
                    You'll be glad you applied to AmaliTech.
                </p>
            </div><hr />

            <div>
                <h3 className='pt-4 pb-4'>Responsibilities</h3>
                <p>
                    <ul>
                        <li>Develop server-side logic, REST, and GraphQL APIs with platforms such as NodeJS and Python.</li>
                        <li>Help improve code quality through writing unit tests, integration tests, and performing code reviews.</li>
                        <li>Develop server-side logic, REST, and GraphQL APIs with platforms such as NodeJS and Python.</li>
                        <li>Help improve code quality through writing unit tests, integration tests, and performing code reviews.</li>                    <li>Develop server-side logic, REST, and GraphQL APIs with platforms such as NodeJS and Python.</li>
                        <li>Help improve code quality through writing unit tests, integration tests, and performing code reviews.</li>                    <li>Develop server-side logic, REST, and GraphQL APIs with platforms such as NodeJS and Python.</li>
                        <li>Help improve code quality through writing unit tests, integration tests, and performing code reviews.</li>                    <li>Develop server-side logic, REST, and GraphQL APIs with platforms such as NodeJS and Python.</li>
                        <li>Help improve code quality through writing unit tests, integration tests, and performing code reviews.</li>

                    </ul>
                </p>
            </div><hr />

            <div>
                <h3 className='pt-4 pb-4'>Job Qualifications</h3>
                <p>In order to be eligible, one must satisfy one of the following two:
                    Minimum of  a Bachelor’s Degree Computer Science, Computer/Software Engineering/ IT OR
                    A Bachelor’s Degree in STEM field with proficiency in at least one of the programming languages C++, Java or JavaScript
                    Must have taken courses in Data Structures, Algorithms, Object Oriented Programming during their undergraduate studies
                    Strong interest and temperament for Computer Programming and Mathematics is a must
                    Previous software development experience is an advantage
                </p>
            </div>
        </div>
    )
}

export default ModalContent
