import { fireEvent, render ,screen, waitFor} from "@testing-library/react"
import { Login } from "./Login"



jest.mock("axios",()=>({

    __esModule:true,
    default:{
        get:()=>({
            data:{
                id:1,name:"John"
            }
        })
    }
}))

test("username input should be render ",()=>{
    render(<Login/>)
    const userInput = screen.getByPlaceholderText(/username/i);
    expect(userInput).toBeInTheDocument()
})
test("password input should be render ",()=>{
    render(<Login/>)
    const userInput = screen.getByPlaceholderText(/password/i);
    expect(userInput).toBeInTheDocument()
})
test("submit input should be render ",()=>{
    render(<Login/>)
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument()
})
test("username input should be empty ",()=>{
    render(<Login/>)
    const userInput = screen.getByPlaceholderText(/username/i);
    expect(userInput.value).toBe("")
});
test("password input should be empty ",()=>{
    render(<Login/>)
    const userInput = screen.getByPlaceholderText(/username/i);
    expect(userInput.value).toBe("")
})

test("submit input should be disable ",()=>{
    render(<Login/>)
    const button = screen.getByRole('button');
    expect(button).toBeDisabled()
})
test("error message should not be visable ",()=>{
    render(<Login/>)
    const errorSpan = screen.getByTestId(/error/i);
    expect(errorSpan).not.toBeVisible()
})

test("username input should change ",()=>{
    render(<Login/>)
    const userInput = screen.getByPlaceholderText(/username/i);
    const testValue = "test"

    fireEvent.change(userInput,{target:{value:testValue}});
    expect(userInput.value).toBe(testValue)
});
test("password input should change ",()=>{
    render(<Login/>)
    const passwordInput = screen.getByPlaceholderText(/password/i);
    const testValue = "test"

    fireEvent.change(passwordInput,{target:{value:testValue}});
    expect(passwordInput.value).toBe(testValue)
})
test("submit input should not be disable when inputs exist ",()=>{
    render(<Login/>)
    const passwordInput = screen.getByPlaceholderText(/password/i);
    const userInput = screen.getByPlaceholderText(/username/i);
    const button = screen.getByRole('button');
    const testValue = "test"
    fireEvent.change(userInput,{target:{value:testValue}});
    fireEvent.change(passwordInput,{target:{value:testValue}});
    expect(button).not.toBeDisabled()
})
test("submit input should be Login tag ",()=>{
    render(<Login/>)
    const button = screen.getByRole('button');
    expect(button).not.toHaveTextContent(/please wait/i)
})
// test("submit input should be loading tag after click",()=>{
//     render(<Login/>)
//     const passwordInput = screen.getByPlaceholderText(/password/i);
//     const userInput = screen.getByPlaceholderText(/username/i);
//     const button = screen.getByRole('button');
//     const testValue = "test"
//     fireEvent.change(userInput,{target:{value:testValue}});
//     fireEvent.change(passwordInput,{target:{value:testValue}});
//     fireEvent.click(button);
//     expect(button).toHaveTextContent(/please wait/i)
// })
// test("submit input should be loading tag after useEfeect  ",async ()=>{
//     render(<Login/>)
//     const button = await screen.findByRole('button');
//     const userInput = screen.getByPlaceholderText(/username/i);
//     const testValue = "test"
//     fireEvent.change(userInput,{target:{value:testValue}});

//     expect(button).toHaveTextContent(/please wait/i)
// })

test("loading should not be rendered after fetching",async ()=>{
    render(<Login/>)
    const passwordInput = screen.getByPlaceholderText(/password/i);
    const userInput = screen.getByPlaceholderText(/username/i);
    const button = screen.getByRole('button');
    const testValue = "test"
    fireEvent.change(userInput,{target:{value:testValue}});
    fireEvent.change(passwordInput,{target:{value:testValue}});
    fireEvent.click(button);
    await waitFor(()=>expect(button).not.toHaveTextContent(/please wait/i)) 
})

// test("user should  be rendered after fetching",async ()=>{
//     render(<Login/>)
//     const passwordInput = screen.getByPlaceholderText(/password/i);
//     const userInput = screen.getByPlaceholderText(/username/i);
//     const button = screen.getByRole('button');
//     const testValue = "test"
//     fireEvent.change(userInput,{target:{value:testValue}});
//     fireEvent.change(passwordInput,{target:{value:testValue}});
//     fireEvent.click(button);
//     const userItem = await screen.findByText('John')
//     expect(userItem).toBeInTheDocument()
// })