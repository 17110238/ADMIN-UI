import React from "react"
import MetaTags from 'react-meta-tags';
import { Container, Row } from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"

import BlogList from "./BlogList"
import RightBar from "./RightBar"

function index(props) {
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Blog List | UI Sample</title>
        </MetaTags>
        <Container fluid>
          <Breadcrumbs maintitle="Home"  title="Blog" breadcrumbItem="Blog List" />
          <Row>
            <BlogList />
            <RightBar />
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default index
