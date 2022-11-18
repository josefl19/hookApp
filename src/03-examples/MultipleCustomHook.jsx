import { useCounter, useFetch } from "../hooks";
import { LoadingQuote } from "./LoadingQuote";
import { Quote } from "./Quote";

export const MultipleCustomHook = () => {
    const { counter, increment } = useCounter(1);
    const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    console.log({ data, isLoading, hasError });
    const { quote, author } = !!data && data[0]         // Solo aplica si regresa un array

    return (
        <>
            <h1>Breaking Bad Quotes</h1>
            <hr />

            {
                isLoading
                    ? <LoadingQuote />
                    : <Quote quote={quote} author={author} />
            }

            <button className="btn btn-success" disabled={ isLoading } onClick={ () => increment() }>
                Next quote
            </button>
        </>
    )
}
