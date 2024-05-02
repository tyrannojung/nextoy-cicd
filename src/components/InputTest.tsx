import { Flex, Input, InputGroup, Button, Text, Box } from '@chakra-ui/react';
import { useState } from 'react';
import commafy from '@/utils/commafy';

export default function InputTest() {
  const [inputValue, setInputValue] = useState<string>('');
  const [formattedValue, setFormattedValue] = useState<string>('');

  const handleSubmit = () => {
    setFormattedValue(commafy(Number(inputValue)));
  };

  return (
    <Box>
      <Flex>
        <InputGroup pr="4">
          <Input
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)} // 입력 값 변경 시 inputValue 상태 업데이트
          />
        </InputGroup>
        <Button onClick={handleSubmit}>submit</Button>
      </Flex>
      <Flex>
        <Text>Value : {formattedValue}</Text>
      </Flex>
    </Box>
  );
}
