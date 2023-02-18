# week-10

### Вопросы 💎

1. Какие есть способы объявления функций?

   1. Function Declaration
   2. Function Expression
   3. Стрелочные функции

2. Приведите примеры вызова одной и той же функции всеми известными вам способами.

   let sayThree = () => console.log("Три!"); sayThree(); console.log(sayThree); alert(sayThree);

3. В чём разница между тестированием и отладкой (дебаггингом)? А что такое логирование?

   Тестирование - попытка сломать работающий код неожиданными действиями юзера. Отладка - исправление неработающего кода. Логирование - вывод промежуточных результатов работы функций в консоль для облегчения отладки.

4. В чём разница между Function Expression и Function Declaration?

- Function Declaration: функция объявляется отдельной конструкцией «function…» в основном потоке кода.
- Function Expression: функция, созданная внутри другого выражения или синтаксической конструкции.

5. Что делает функция `console.log()`?

   Выводит сообщение в консоль

6. По какой причине, мы можем использовать до объявления функцию, объявленную через `Function Declaration`, но не можем ту, которая объявлена через `Function Expression` ?

**Function Expression создаётся, когда выполнение доходит до него, и затем уже может использоваться.** После того, как поток выполнения достигнет правой части выражения присваивания `let sum = function…` — с этого момента, функция считается созданной и может быть использована (присвоена переменной, вызвана и т.д.). С Function Declaration всё иначе.

7. Что такое глобальная зона видимости функций?

Область видимости вне любых функций

8.  Что вернёт код?

    ```jsx
    function showX(x) {
      return x;
    }
    console.log(showX(28));
    ```

         28

9.  Что выведет этот код?

    ```jsx
    function sum(x, y = 0) {
      return x + y;
    }
    console.log(sum(5));
    ```

            5

10. Что выведет код?

    ```jsx
    console.log(foo);

    let foo = "Cat";

    console.log(foo);
    ```

        Uncaught ReferenceError: Cannot access 'foo' before initialization

    at
