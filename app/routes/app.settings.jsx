import { Page, Form, FormLayout, TextField, Button, MediaCard } from '@shopify/polaris';
import { useState, useCallback } from 'react';
import logo from './_index/images/Banner_Icon.png'; // Tell webpack this JS file uses this image

export default function Setting() {
  const [store, setStore] = useState('');
  const [merchant, setMerchant] = useState('');

  const handleSubmit = useCallback(() => {
    // Handle form submission logic here
    setMerchant('');
    setStore('');
  }, []);

  const handleStoreChange = useCallback((value) => {
    // Update the newsletter state when the checkbox is changed
    setStore(value);
  }, []);

  const handleMerchantChange = useCallback((value) => {
    // Update the email state when the text field is changed
    setMerchant(value);
  }, []);

  return (
    
    <Page>
      <MediaCard
      title="Credit Direct"
     // primaryAction={{
       // content: 'Add a product',
       // onAction: () => {},
     // }}
      secondaryAction={{
        content: 'Learn more',
        url: "https://www.creditdirect.ng/", target:'_blank',
      }}
      description="Split payments made easy for merchants and customers."
      popoverActions={[{content: 'Dismiss', onAction: () => {}}]}
    >
   
      <img
        alt=""
        width="100%"
        height="100%"
        style={{objectFit: 'fill', objectPosition: 'center'}}
        src={logo}
      />
    </MediaCard>

    <Form onSubmit={handleSubmit}>
      <FormLayout>
        

        <TextField
          value={store}
          onChange={handleStoreChange}
          label="Store Name"
          type="text"
          autoComplete=''
          helpText={
            <span>
              Store name
            </span>
          }
        />


<TextField
          value={merchant}
          onChange={handleMerchantChange}
          label="Merchant ID"
          type="number"
          autoComplete=''
          helpText={
            <span>
              Dont't have merchant ID, contact checkout@creditdirect.ng 
            </span>
          }
        />

        <Button submit>Submit</Button>
      </FormLayout>
    </Form>
    </Page>
  );
}
