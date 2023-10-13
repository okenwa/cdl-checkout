import {
  BlockStack,
  InlineStack,
  Button,
  Image,
  Text,
  useAvailablePaymentOptions,
  useApi,
  reactExtension,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  const { extension } = useApi();
  const options = useAvailablePaymentOptions();
  if (
    options.some(
      (option) => option.type === 'offsite',
    )
  )
  return (
<InlineStack>
      <Image source="/url/for/image" />
      <BlockStack>
        <Text size="large">Heading</Text>
        <Text size="small">Description</Text>
      </BlockStack>
      <Button
        onPress={() => {
          console.log('button was pressed');
        }}
      >
        Button
      </Button>
    </InlineStack>
  );
}