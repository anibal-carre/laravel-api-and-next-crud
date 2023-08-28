const { default: Link } = require("next/link");

const NavBar = () => {
  return (
    <nav className="w-screen h-[60px] flex items-center justify-around bg-blue-950 text-white font-semibold text-base shadow-sm shadow-black">
      <ul className="w-[65%] h-full flex gap-5">
        <li className="h-full flex items-center justify-center w-[90px] hover:bg-blue-200 hover:text-blue-900 transition-all duration-100">
          <Link href={"/"}>Inicio</Link>
        </li>
        <li className="h-full flex items-center justify-center w-[90px] hover:bg-blue-200 hover:text-blue-900 transition-all duration-100">
          <Link href={"/alumno"}>Alumnos</Link>
        </li>
        <li className="h-full flex items-center justify-center w-[90px] hover:bg-blue-200 hover:text-blue-900 transition-all duration-100">
          <Link href={"/docente"}>Docentes</Link>
        </li>
        <li className="h-full flex items-center justify-center w-[90px] hover:bg-blue-200 hover:text-blue-900 transition-all duration-100">
          <Link href={"/curso"}>Cursos</Link>
        </li>
      </ul>
      <ul className="h-full flex gap-8">
        <li className="h-full flex items-center justify-center w-[90px] hover:bg-blue-200 hover:text-blue-900 transition-all duration-100">
          <Link href={"/matricula"}>Matriculas</Link>
        </li>
        <li className="h-full flex items-center justify-center w-[100px] hover:bg-blue-200 hover:text-blue-900 transition-all duration-100">
          <Link href={"/asistencia"}>Asistencias</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
