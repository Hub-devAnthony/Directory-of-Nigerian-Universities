import { Text, GoToLink } from "./Typography";

const DisplayInfo = ({
  universityName,
  universityType,
  universityLocation,
  yearOfEstablishment,
  viceChancellor,
  universityWebsite,
  universityFaculties,
  universityDepartments,
  academicCalendar,
}) => {
  return (
    <div className="p-5 w-fit m-auto space-y-3 text-left text-lg font-semibold text-black">
      <p>
        University Name: <Text text={universityName} />
      </p>
      <p>
        University Type: <Text text={universityType} />
      </p>
      <p>
        Location: <Text text={universityLocation} />
      </p>
      <p>
        Year of Establishment: <Text text={yearOfEstablishment} />
      </p>
      <p>
        Current Vice Chancellor: <Text text={viceChancellor} />
      </p>
      <p>
        Number of Faculties: <Text text={universityFaculties} />
      </p>
      <p>
        Number of Departments: <Text text={universityDepartments} />
      </p>

      <p>
        Official Website: <GoToLink link={universityWebsite} />
      </p>

      <p>
        Academic Calendar: <GoToLink link={academicCalendar} />
      </p>
    </div>
  );
};

export default DisplayInfo;
