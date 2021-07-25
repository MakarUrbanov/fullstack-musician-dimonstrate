import React, { useEffect, useState } from 'react'
import Page from '@components/Page/Page'
import { NavLink } from 'react-router-dom'

function Quiz() {
  const [ask, setAsk] = useState(0)

  useEffect(() => {
    setAsk(0)
  }, [])

  const [pass, setPass] = useState('')

  const password = (
    <form>
      <div className="quiz-ask-wrapper">
        <h3> ВВЕДИТЕ ПАРОЛЬ </h3>
        <input
          value={pass}
          onChange={(e) => {
            setPass(e.target.value)
          }}
          className="pass-input"
          placeholder="PASSWORD"
        />
        <button
          style={{ fontSize: '25px', padding: '10px' }}
          onClick={() => {
            if (pass.trim().toLowerCase().split(' ').join('') === '88squad') {
              setAsk(ask + 1)
              return alert('ВЕРНО СУКИН СЫН!')
            }
            alert('НЕА СУКИН СЫН. ДАВАЙ ПО НОВОЙ!')
          }}
        >
          ENTER
        </button>
      </div>
    </form>
  )

  const [ask1Temp, setAsk1Temp] = useState(0)

  const ask1 = (
    <form>
      <div className="quiz-ask-wrapper">
        <h3> Сопоставьте страну со столицей </h3>
        <div className="quiz-ask-body">
          <div className="quiz-ask-1">
            <span>
              <a></a>
              <a>Рейкьявик</a>
              <a>Вена</a>
              <a>Белград</a>
              <a>Братислава</a>
              <a>Брюссель</a>
              <a>Каракас</a>
            </span>
            <span>
              <a>Австрия</a>
              <p
                onClick={(e) => {
                  e.target.style.backgroundColor = 'red'
                }}
              >
                Г
              </p>
              <p
                onClick={(e) => {
                  e.target.style.backgroundColor = 'green'
                  setAsk1Temp(ask1Temp + 1)
                }}
              >
                Х
              </p>
              <p
                onClick={(e) => {
                  e.target.style.backgroundColor = 'red'
                }}
              >
                С
              </p>
              <p
                onClick={(e) => {
                  e.target.style.backgroundColor = 'red'
                }}
              >
                Ф
              </p>
              <p
                onClick={(e) => {
                  e.target.style.backgroundColor = 'red'
                }}
              >
                Ц
              </p>
              <p
                onClick={(e) => {
                  e.target.style.backgroundColor = 'red'
                }}
              >
                Ш
              </p>
            </span>
            <span>
              <a>Исландия</a>
              <p
                onClick={(e) => {
                  e.target.style.backgroundColor = 'green'
                  setAsk1Temp(ask1Temp + 1)
                }}
              >
                А
              </p>
              <p
                onClick={(e) => {
                  e.target.style.backgroundColor = 'red'
                }}
              >
                Д
              </p>
              <p
                onClick={(e) => {
                  e.target.style.backgroundColor = 'red'
                }}
              >
                У
              </p>
              <p
                onClick={(e) => {
                  e.target.style.backgroundColor = 'red'
                }}
              >
                Р
              </p>
              <p
                onClick={(e) => {
                  e.target.style.backgroundColor = 'red'
                }}
              >
                О
              </p>
              <p
                onClick={(e) => {
                  e.target.style.backgroundColor = 'red'
                }}
              >
                Я
              </p>
            </span>
            <span>
              <a>Венесуэла</a>
              <p
                onClick={(e) => {
                  e.target.style.backgroundColor = 'green'
                  setAsk1Temp(ask1Temp + 1)
                }}
              >
                Н
              </p>
              <p
                onClick={(e) => {
                  e.target.style.backgroundColor = 'red'
                }}
              >
                Й
              </p>
              <p
                onClick={(e) => {
                  e.target.style.backgroundColor = 'red'
                }}
              >
                Х
              </p>
              <p
                onClick={(e) => {
                  e.target.style.backgroundColor = 'red'
                }}
              >
                П
              </p>
              <p
                onClick={(e) => {
                  e.target.style.backgroundColor = 'red'
                }}
              >
                Л
              </p>
              <p
                onClick={(e) => {
                  e.target.style.backgroundColor = 'green'
                  setAsk1Temp(ask1Temp + 1)
                }}
              >
                Н
              </p>
            </span>
            <span>
              <a>Словакия</a>
              <p
                onClick={(e) => {
                  e.target.style.backgroundColor = 'red'
                }}
              >
                Я
              </p>
              <p
                onClick={(e) => {
                  e.target.style.backgroundColor = 'red'
                }}
              >
                Ж
              </p>
              <p
                onClick={(e) => {
                  e.target.style.backgroundColor = 'red'
                }}
              >
                Ю
              </p>
              <p
                onClick={(e) => {
                  e.target.style.backgroundColor = 'green'
                  setAsk1Temp(ask1Temp + 1)
                }}
              >
                Н
              </p>
              <p
                onClick={(e) => {
                  e.target.style.backgroundColor = 'green'
                  setAsk1Temp(ask1Temp + 1)
                }}
              >
                Н
              </p>
              <p
                onClick={(e) => {
                  e.target.style.backgroundColor = 'red'
                }}
              >
                Г
              </p>
            </span>
            <span>
              <a>Сербия</a>
              <p
                onClick={(e) => {
                  e.target.style.backgroundColor = 'red'
                }}
              >
                М
              </p>
              <p
                onClick={(e) => {
                  e.target.style.backgroundColor = 'red'
                }}
              >
                Б
              </p>
              <p
                onClick={(e) => {
                  e.target.style.backgroundColor = 'green'
                  setAsk1Temp(ask1Temp + 1)
                }}
              >
                А
              </p>
              <p
                onClick={(e) => {
                  e.target.style.backgroundColor = 'red'
                }}
              >
                Э
              </p>
              <p
                onClick={(e) => {
                  e.target.style.backgroundColor = 'red'
                }}
              >
                М
              </p>
              <p
                onClick={(e) => {
                  e.target.style.backgroundColor = 'red'
                }}
              >
                З
              </p>
            </span>
            <span>
              <a>Бельгия</a>
              <p
                onClick={(e) => {
                  e.target.style.backgroundColor = 'red'
                }}
              >
                П
              </p>
              <p
                onClick={(e) => {
                  e.target.style.backgroundColor = 'red'
                }}
              >
                А
              </p>
              <p
                onClick={(e) => {
                  e.target.style.backgroundColor = 'red'
                }}
              >
                И
              </p>
              <p
                onClick={(e) => {
                  e.target.style.backgroundColor = 'red'
                }}
              >
                Б
              </p>
              <p
                onClick={(e) => {
                  e.target.style.backgroundColor = 'green'
                  setAsk1Temp(ask1Temp + 1)
                }}
              >
                М
              </p>
              <p
                onClick={(e) => {
                  e.target.style.backgroundColor = 'red'
                }}
              >
                С
              </p>
            </span>
          </div>
        </div>
        <button
          onClick={() => {
            if (ask1Temp >= 6) {
              return setAsk(ask + 1)
            }
            alert('ОТВЕЧАЙ ЕЩЕ!')
          }}
        >
          COMPLETE
        </button>
      </div>
    </form>
  )
  const [ask2Temp, setAsk2Temp] = useState('')

  const ask2 = (
    <form>
      <div className="quiz-ask-wrapper">
        <h3>
          Расположите в хронологической последовательности исторические события.
          Запишите цифры, которыми обозначены исторические события, в правильной
          последовательности в ответ
        </h3>
        <div className="quiz-ask-body">
          <div className="quiz-ask2-wrapper">
            <div className="ask2-top">
              <div className="ask2-top-item">
                <button onClick={() => setAsk2Temp(ask2Temp + '1')}>1</button>
                <span>Избрание М. Романова на царство</span>
              </div>
              <div className="ask2-top-item">
                <button onClick={() => setAsk2Temp(ask2Temp + '2')}>2</button>
                <span>Введение всесословной воинской повинности</span>
              </div>
              <div className="ask2-top-item">
                <button onClick={() => setAsk2Temp(ask2Temp + '3')}>3</button>
                <span>Куликовская битва</span>
              </div>
              <div className="ask2-top-item">
                <button onClick={() => setAsk2Temp(ask2Temp + '4')}>4</button>
                <span>Принятие Соборного Уложения</span>
              </div>
              <div className="ask2-top-item">
                <button onClick={() => setAsk2Temp(ask2Temp + '5')}>5</button>
                <span>Семилетняя война</span>
              </div>
            </div>
            <div className="ask2-bottom">
              <input
                disabled
                onChange={(e) => setAsk2Temp(e.target.value)}
                value={ask2Temp}
              />
              <button onClick={() => setAsk2Temp('')}>CLEAR</button>
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            if (ask2Temp === '31452') {
              return setAsk(ask + 1)
            }
            alert('НЕВЕРНО')
          }}
        >
          COMPLETE
        </button>
      </div>
    </form>
  )

  const [ask3Temp, setAsk3Temp] = useState('')

  const ask3 = (
    <form>
      <div className="quiz-ask-wrapper">
        <h3>
          Как называется средство художественной выразительности, которое
          использует Маяковский в данных строках?
        </h3>
        <div className="quiz-ask-body">
          <div className="quiz-ask3-wrapper">
            <span> Видите — спокоен как! Как пульс покойника.</span>
            <input
              onChange={(e) => {
                setAsk3Temp(e.target.value)
              }}
              value={ask3Temp}
            />
          </div>
        </div>
        <button
          onClick={() => {
            if (ask3Temp.trim().toLowerCase() === 'сравнение') {
              return setAsk(ask + 1)
            }
            alert('НЕВЕРНО')
          }}
        >
          COMPLETE
        </button>
      </div>
    </form>
  )

  const [ask4Temp, setAsk4Temp] = useState('')
  const [ask4Match, setAsk4Match] = useState([
    'я',
    'живу',
    'в',
    'спальном',
    'районе',
    'но',
    'не',
    'высыпаюсь',
    'здесь',
    'каждый',
    'второй',
    'это',
    'лысый',
    'парень',
  ])
  const [ask4Res, setAsk4Res] = useState(true)

  function matchAsk4(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (ask4Res === true) {
        setAsk4Res(arr[i] === ask4Match[i])
      }
    }
  }

  const ask4 = (
    <form>
      <div className="quiz-ask-wrapper">
        <h3>Переведите предложение</h3>
        <div className="quiz-ask-body">
          <div className="quiz-ask3-wrapper">
            <span style={{ textAlign: 'center', lineHeight: '25px' }}>
              je vis dans une zone de couchage, mais je ne dors pas assez ici,
              chaque seconde est un gars chauve
            </span>
            <input
              value={ask4Temp}
              onChange={(e) => {
                setAsk4Temp(e.target.value)
              }}
            />
          </div>
        </div>
        <button
          onClick={() => {
            matchAsk4(
              ask4Temp.trim().toLowerCase().split(',').join('').split(' ')
            )
            if (ask4Res === true) {
              return setAsk(ask + 1)
            }
            alert('НЕВЕРНО')
          }}
        >
          COMPLETE
        </button>
      </div>
    </form>
  )

  const [ask5Temp, setAsk5Temp] = useState('0')

  const ask5 = (
    <form>
      <div className="quiz-ask-wrapper">
        <h3>Задачка</h3>
        <div className="quiz-ask-body">
          <div className="quiz-ask3-wrapper">
            <span style={{ textAlign: 'center', lineHeight: '25px' }}>
              Бутылка пивасика стоит 160 рублей. Какое наибольшее число
              бутылочек можно купить на 1000 рублей во время распродажи, когда
              скидка составляет 25% ?
            </span>
            <input
              value={ask5Temp}
              onChange={(e) => {
                setAsk5Temp(e.target.value)
              }}
            />
          </div>
        </div>
        <button
          onClick={() => {
            if (ask5Temp === '8') {
              return setAsk(ask + 1)
            }
            alert('НЕВЕРНО')
          }}
        >
          COMPLETE
        </button>
      </div>
    </form>
  )

  const [ask6Temp, setAsk6Temp] = useState('0')

  const ask6 = (
    <form>
      <div className="quiz-ask-wrapper">
        <h3>Отлично... Мы дошли до финала</h3>
        <div className="quiz-ask-body">
          <div
            style={{ height: '150px', position: 'relative' }}
            className="quiz-ask3-wrapper"
          >
            <span style={{ textAlign: 'center', lineHeight: '25px' }}>
              Сколько Диме исполнилось годиков?
            </span>
            <button
              style={{
                position: 'absolute',
                top: '30%',
                left:
                  ask6Temp === 'left' ? '0' : ask6Temp === 'right' ? '90%' : '',
                fontSize: '10px',
                padding: '20px',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
              }}
              onClick={() => {
                ask6Temp === '1' ? setAsk(ask + 1) : ''
              }}
              onMouseEnter={() => {
                if (ask6Temp === '0') {
                  setAsk6Temp('left')
                }
                if (ask6Temp === 'left') {
                  setAsk6Temp('right')
                }
                if (ask6Temp === 'right') {
                  setAsk6Temp('1')
                }
              }}
            >
              21
            </button>
          </div>
        </div>
      </div>
    </form>
  )

  const finish = (
    <form>
      <div>
        <div className="quiz-ask-wrapper">
          <h3>УРА! ПОБЕДА!</h3>
          <div className="quiz-ask-body">
            <div className="quiz-ask3-wrapper">
              <span> Можете забрать ваш приз</span>
              <button
                style={{ fontSize: '30px', padding: '20px' }}
                onClick={() => {
                  setAsk(ask + 1)
                  getMoneyFunc()
                }}
              >
                ПОЛУЧИТЬ ДЕНЬГИ
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  )

  const [getMoneyTemp, setGetMoneyTemp] = useState(false)

  function getMoneyFunc() {
    setTimeout(() => {
      setGetMoneyTemp(true)
    }, 10000)
  }

  const getMoney = (
    <form>
      <div>
        <div className="quiz-ask-wrapper">
          <h3>ПЕРЕВОД</h3>
          <div style={{ padding: '30px 0' }}>
            {getMoneyTemp ? (
              <div
                style={{
                  padding: '10px',
                  backgroundColor: 'green',
                  color: 'white',
                  borderRadius: '20px',
                }}
              >
                ПЕРЕВОД ВЫПОЛНЕН
              </div>
            ) : (
              <div className="lds-default">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            )}
          </div>
          {getMoneyTemp ? (
            <NavLink to="/">
              <button>ЗАКОНЧИТЬ ИГРУ</button>
            </NavLink>
          ) : (
            ''
          )}
        </div>
      </div>
    </form>
  )

  const body = (
    <div className="quiz-wrapper">
      {ask === 0
        ? password
        : ask === 1
        ? ask1
        : ask === 2
        ? ask2
        : ask === 3
        ? ask3
        : ask === 4
        ? ask4
        : ask === 5
        ? ask5
        : ask === 6
        ? ask6
        : ask === 7
        ? finish
        : ask === 8
        ? getMoney
        : ''}
    </div>
  )

  return <Page title="Quiz" body={body} />
}

export default Quiz
