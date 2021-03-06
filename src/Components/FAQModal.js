import React from "react";
import { Modal } from "antd";
import Constants from "../Constants";

class FAQEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }

  getBody = () => {
    return { __html: this.props.body };
  };

  render() {
    return (
      <>
        <h3
          style={{ cursor: "pointer" }}
          onClick={event => this.setState({ expanded: !this.state.expanded })}
        >
          {this.props.title}
        </h3>
        {this.state.expanded && (
          <p dangerouslySetInnerHTML={this.getBody()}></p>
        )}
      </>
    );
  }
}

function FAQModal(props) {
  function renderLink(url, text, target) {
    target = target || "_blank";
    return "<a target='" + target + "' href='" + url + "'>" + text + "</a>";
  }

  function addPlaceLink(text) {
    return renderLink(Constants.AddPlaceURL, text, "_self");
  }

  const consumerFAQs = [
    {
      title: "What is SaveOurFaves?",
      body:
        "SaveOurFaves is a directory of small businesses that offer online gift cards for purchase. It’s our hope that by providing this resource, we’ll be able to mobilize loyal customers to provide much-needed support for their favorite places in town."
    },
    {
      title: "Why isn’t my favorite business on your site?",
      body:
        "Please help us add your fave small businesses! Input their information " +
        addPlaceLink("here") +
        "and we'll review it ASAP"
    },
    {
      title:
        "How else can I support our local businesses beyond purchasing a gift card?",
      body:
        "Delivery and pickup are great options! Some restaurants that don’t normally offer delivery have started to offer curbside pickup during the pandemic, so check their websites and social media to see what’s available. <br />" +
        "Tip generously if you can (even for delivery/pickup), since employees are doing extra work and putting their health at risk. <br />" +
        "Encourage the government to get involved. Sign this " +
        renderLink("http://chng.it/jM97Sbf9ct", "petition") +
        " to encourage lawmakers to offer emergency small business loans. Please call your US Representative and your Senators. You can be connected to the capitol switchboard at 202-224-3121. Demand that small businesses are part the federal stimulus plan."
    },
    {
      title: "Why is this just for California? Can you do this for my city?",
      body:
        "I started this project for Los Angeles building upon the work of other small business supporters in San Francisco. You, too, can help get a similar site working for your city. If you're a software engineer, fork the the saveourfaves " +
        renderLink("https://github.com/mikeyk/saveourfaves-frontend", "github ") +
        renderLink("https://github.com/mikeyk/saveourfaves-server", "repositories.") +
        "Also, check out similar initiatives like" +
        renderLink("https://helpmainstreet.com/", "Help Main Street") +
        ", " +
        renderLink("https://givelocal.co/", "GiveLocal") +
        ", and " +
        renderLink(
          "https://rallyforrestaurants.com/",
          "Rally for Restaurants"
        ) +
        "."
    },
    {
      title: "Who built this? And why?",
      body:
        "The original SaveOurFaves platform was built by Kaitlyn & Mike Krieger -- a husband and wife duo in San Francisco. They're no longer going out because of COVID-19 (San Francisco is under a “shelter in place” ordinance), so they started buying gift cards to help support their favorite cafes and restaurants during this unpredictable time. SaveOurFaves is their simple way to make it easier for people to help local businesses through this difficult time. They got help and advice from some great friends and local business owners, in particular Phil Levin, Zack Schwab, Kristen Berman, Stefanie Krieger, Melissa Dyrdahl, Laura Buhler, and Paul Einbund. You can contact them with any questions about the site at " +
        renderLink("mailto:info@saveourfaves.org", "info@saveourfaves.org") +
        " and see more about why they decided to start it " +
        renderLink(
          "https://medium.com/@mikekrieger/launching-saveourfaves-lets-support-restaurants-with-gift-cards-c4fb3e1828cf",
          "here"
        ) +
        ". The Los Angeles site was started for similar reasons by Laura Eckman."
    }
  ];
  const bizFAQs = [
    {
      title: "Why isn’t my business showing up in your search results?",
      body:
        "Please help us add your SoCal small business " +
        addPlaceLink("here") +
        ". We're currently reliant on community input to make sure we have the most up to date information as business bring gift card offerings online."
    },
    {
      title:
        "My business offers gift certificates, but your site says we don’t",
      body: "Please let us know the details " + addPlaceLink("here") + "."
    },
    {
      title: "How can I start offering online gift cards?",
      body:
        "The first step is to check with your POS provider. Many offer their own gift card features (e.g. Square, Toast, ShopKeep), and others integrate with specific third-party providers. If your POS provider doesn’t offer gift cards or integrate with third-party providers, there are some reasonable standalone eGift Card apps like GiftUp or GiftFly. If you’re considering other options, make sure that your business receives the fee for the gift card as soon as the customer purchases the card (otherwise that won’t help you during the crisis). Some services may also ask customers to pay an additional fee when they buy a gift card but be sure it’s a small amount."
    },
    {
      title: "How can I encourage customers to buy gift cards?",
      body:
        "People are looking for ways they can support their favorite businesses, so don’t be afraid to let them know that gift cards will help. Reach out to your community on Facebook, Twitter, and Instagram, and use your email list to get in touch with your customers. Ask them to consider buying a gift card for one month of spending to help you weather this storm and keep paying staff, so that you can continue offering great service for years to come."
    }
  ];
  return (
    <Modal
      title="FAQs"
      visible={props.shouldShow}
      onOk={props.onClose}
      width="80%"
      onCancel={props.onClose}
      footer={<span></span>}
    >
      <h2>For Supporters</h2>
      {consumerFAQs.map(faq => (
        <FAQEntry key={faq.title} title={faq.title} body={faq.body} />
      ))}
      <h2>For Businesses</h2>
      {bizFAQs.map(faq => (
        <FAQEntry key={faq.title} title={faq.title} body={faq.body} />
      ))}
    </Modal>
  );
}

export default FAQModal;
