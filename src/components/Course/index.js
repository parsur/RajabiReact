import React, { useEffect, useState } from 'react';
import {
    Container,
    Left,
    Right,
    Top,
    Bottom,
    Img,
    H1,
    P,
    TContainer,
    Block,
    SearchContainer,
    Search,
    Sticky,
    Submit,
    MainB,
    Photo,
    Name,
    Price,
    NameH,
    Green,
    Pn,
    FilterContainer,
    Searchs,
    Filter,
    SelectS,
    NoResult,
    VscSearchStops,
    OtherCourses,
    OCTop,
    OCBottom,
    OCHR,
    H3,
    Suggested
} from './CourseElements';
import courselogo from '../../images/courselogo.png';
import api from '../../api';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import axios from 'axios';

const options = [
    { value: 'دسته بندی اول', label: 'دسته بندی اول' },
    { value: 'دسته بندی دوم', label: 'دسته بندی دوم' },
    { value: 'دسته بندی سوم', label: 'دسته بندی سوم' }
  ]

const token = 'parsur';

const Course = ({ data }) => {
    const [course, setCourse] = useState(null);
    const [search, setSearch] = useState("");
    const [noRes, setNoRes] = useState(null);

    useEffect(() => {
        api("api/course/show")
            .then((data) => {
                setCourse([])
                setCourse(data.courses);
            })
    }, []);

    function submit(){
        console.log(search);
        axios.post('http://sararajabi.com/api/course/search', {
            search: search,
        }
        )
        .then(function (response) {
            setCourse(response.data.courses);
            if(response.data.courses == 0){
                setNoRes(noResult);
            } else {
                setNoRes(null);
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    function handleSearchChaneg(event){
        if (event.target.value == "") {
            api("api/course/show")
            .then((data) => {
                setCourse(data.courses);
            })
            setNoRes(null)
        } else {
            setSearch(event.target.value);
        }
    }

    const noResult = function () {
        return (
            <NoResult><VscSearchStops/>متاسفانه نتیجه ای پیدا نشد!</NoResult>
        );
    }

    /*function submit(){
        console.log(search);
        fetch('http://sararajabi.com/api/course/search',{
            method:'post',
            body: {
                search: search,
            },
            headers:{
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            }
        }).then(function(response){
            response.json().then(function(resp){
                console.log(resp)
            })
        })
    }*/

    return course ? (
        <Container>
            <Left>
                <Sticky>
                    <Top>
                        <TContainer>
                            <SearchContainer onSubmit={event => event.preventDefault()}>
                                <Searchs>
                                    <Search onChange={handleSearchChaneg} type="search" id="search" required="required" placeholder="سرچ کنید..." />
                                    <Submit onClick={()=>submit()} type="submit" value="جستجو"><AiOutlineSearch/></Submit>
                                </Searchs>
                                <FilterContainer>
                                    <Filter>
                                        <SelectS options={options} placeholder="دسته بندی اول" />
                                    </Filter>
                                    <Filter>
                                        <SelectS options={options} placeholder="دسته بندی دوم" />
                                    </Filter>
                                </FilterContainer>
                            </SearchContainer>
                            <H1>دوره ها</H1>
                        </TContainer>
                    </Top>
                    <Bottom>
                        <Img src={courselogo} alt="course logo" />
                    </Bottom>
                </Sticky>
            </Left>
            <Right>
                {noRes}
            {course.map(({ name, price, i }) => {
        return( <Block key={i}>

            <MainB to="/coursedetails">

                <Photo></Photo>

                <Name>

                    <NameH>{name}</NameH>

                </Name>

                <Price>

                    <Green>

                        <Pn>{price} تومان</Pn>

                    </Green>

                </Price>

            </MainB>
            
            </Block> );
    })}

                <OtherCourses>

                    <OCTop><H3>دوره های منتخب</H3></OCTop>

                    <OCHR/>

                    <OCBottom>

                        <Suggested>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام </Suggested>
                        <Suggested>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام </Suggested>
                        {/* <Suggested>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام </Suggested>
                        <Suggested>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام </Suggested>
                        <Suggested>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام </Suggested>
                        <Suggested>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام </Suggested> */}

                    </OCBottom>

                </OtherCourses>

            </Right>
        </Container>
    ) : (
        <Container>
            <Left>
                <Sticky>
                    <Top>
                        <TContainer>
                            <SearchContainer onSubmit={event => event.preventDefault()}>
                                <Searchs>
                                    <Search onChange={handleSearchChaneg} type="search" id="search" required="required" placeholder="سرچ کنید..." />
                                    <Submit onClick={()=>submit()} type="submit" value="جستجو"><AiOutlineSearch/></Submit>
                                </Searchs>
                                <FilterContainer>
                                    <Filter>
                                        <SelectS options={options} placeholder="دسته بندی اول" />
                                    </Filter>
                                    <Filter>
                                        <SelectS options={options} placeholder="دسته بندی دوم" />
                                    </Filter>
                                </FilterContainer>
                            </SearchContainer>
                            <H1>دوره ها</H1>
                        </TContainer>
                    </Top>
                    <Bottom>
                        <Img src={courselogo} alt="course logo" />
                    </Bottom>
                </Sticky>
            </Left>
            <Right>
            <div style={{width:"100%", height:"50%", display:"flex"}}>
            <Loader
            type="Oval"
            color="#F4DD4F"
            height={150}
            width={150}
            timeout={3000} //3 secs
            style={{margin: "auto"}}
            />
        </div>
            </Right>
        </Container>
    );
}

export default Course;

{/* <div style={{width:"100%", height:"100%", display:"flex", background: "#F4DD4F"}}>
            <Loader
            type="Oval"
            color="#fff"
            height={150}
            width={150}
            timeout={3000} //3 secs
            style={{margin: "auto"}}
            />
        </div> */}