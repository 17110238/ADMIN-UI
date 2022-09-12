import React from "react"
import MetaTags from 'react-meta-tags';
import { Container, Row } from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"

import BlogGrid from "./BlogGrid"
import RightBar from "../BlogList/RightBar"

const index = props => {
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Blog Grid | UI Sample</title>
        </MetaTags>
        <Container fluid>
          <Breadcrumbs maintitle="Veltrix" title="Blog" breadcrumbItem="Blog Grid" />
          <Row>
            <BlogGrid />
            <RightBar />
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default index
