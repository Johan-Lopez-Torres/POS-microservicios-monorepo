import {Button, useColorMode} from "@chakra-ui/react";

function ToggleMode() {
    const {toggleColorMode} = useColorMode()


    return (
        <>

            <Button size='sm' onClick={toggleColorMode}>
                Toggle Mode
            </Button>
        </>
    )
}

export default ToggleMode;

