import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Image, Button } from 'react-bootstrap';

export interface IUserDetails {
    id: number;
    firstName: string;
    lastName: string;
    maidenName: string;
    age: number;
    gender: string;
    email: string;
    phone: string;
    username: string;
    password: string;
    birthDate: string;
    image: string;
    bloodGroup: string;
    height: number;
    weight: number;
    eyeColor: string;
    hair: IHair;
    domain: string;
    ip: string;
    address: IAddress;
    macAddress: string;
    university: string;
    bank: IBank;
    company: ICompany;
    ein: string;
    ssn: string;
    userAgent: string;
}
export interface IHair {
    color: string;
    type: string;
}
export interface IAddress {
    address: string;
    city: string;
    coordinates: ICoordinates;
    postalCode: string;
    state: string;
}
export interface ICoordinates {
    lat: number;
    lng: number;
}
export interface IBank {
    cardExpire: string;
    cardNumber: string;
    cardType: string;
    currency: string;
    iban: string;
}
export interface ICompany {
    address: IAddress;
    department: string;
    name: string;
    title: string;
}

function Users() {
    const [allUsers, setAllUsers] = useState<IUserDetails[]>();
    const [isDataLoading, setIsDataLoading] = useState(true);
    useEffect(() => {
        try {
            fetch('http://localhost:8000/api/users').then((response) => response.json())
                .then((data) => {
                    setAllUsers(data)
                    setIsDataLoading(false);
                });
        } catch (error) {
            alert("Error occured");
            setIsDataLoading(false)
        }
    }, []);
    return (
        <Container>
            <h3>Check our users</h3>

            {!isDataLoading && <Row>
                {allUsers?.map((user) => {
                    return <Col lg={3} className="p-2 m-2 bg-light rounded hover-shadow" key={user.id}>
                        <Image src={user.image} alt="userImage" thumbnail={true} />
                        <div className='d-flex flex-column py-2'>
                            <span className='d-flex align-items-center justify-content-between'>
                                <strong className='mx-2'>
                                    Name
                                </strong>
                                <span className='text-info font-weight-semibold'>
                                    {`${user.firstName} ${user.lastName}`}
                                </span>
                            </span>
                            <span className='d-flex align-items-center justify-content-between'>
                                <strong className='mx-2'>
                                    Email
                                </strong>
                                <span className='text-success font-weight-semibold cursor-pointer'>
                                    {user.email}
                                </span>
                            </span>
                            <span className='d-flex align-items-center justify-content-between'>
                                <strong className='mx-2'>
                                    Phonenumber
                                </strong>
                                <span className='text-primary font-weight-semibold cursor-pointer'>
                                    {user.phone}
                                </span>
                            </span>
                        </div>
                        <div className="d-grid">
                            <Button variant='outline-info' size='lg'>
                                Check
                            </Button>
                        </div>
                    </Col>
                })}
            </Row>}
        </Container>
    );
}

export default Users;