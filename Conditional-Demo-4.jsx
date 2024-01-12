export default function App() {
    return(
        <div className={'${isRainy === true ? 'dark' : 'light''}'}>
            <RainOrShine />
        </div>
    );
}