import { Link } from "react-router-dom";
import "./SalesStore.scss";
import { CardStore } from "../CardStore/CardStore";
import { useApi } from "../../hook/useApi";
import { useEffect, useState } from "react";
import { Oval } from "react-loader-spinner";
import { useApiPlatzi } from "../../hook/useApiPlatzi";
export const SalesStore = () => {
  // const { characters, loading: initialLoading } = useApi();
  const { characters, loading: initialLoading } = useApiPlatzi();
  const [loading, setLoading] = useState(true);
  // console.log(characters);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(initialLoading);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [initialLoading]);

  return (
    <section className="sales">
      <h1 className="sales-title">Titulo 1</h1>
      <div className="sales-container">
        <ul className="sales-items">
          {characters.slice(0, 7).map((item) => (
            <li className="sales-items__item" key={item.id}>
              {loading ? (
                <li className="card card--loading">
                  <Oval
                    height={40}
                    width={40}
                    color="#4fa94d"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    ariaLabel="oval-loading"
                    secondaryColor="#4fa94d"
                    strokeWidth={2}
                    strokeWidthSecondary={2}
                  />
                </li>
              ) : (
                <CardStore {...item} />
              )}
            </li>
            // <CardStore key={item.id} {...item}/>
          ))}
        </ul>
        <div className="sales-all">
          <Link to="">Ver todo</Link>
        </div>
      </div>
    </section>
  );
};
