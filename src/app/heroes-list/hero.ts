 export class Hero {
	 static cpt:number = 0;
	 
	 id: number;
	 name: string;
	 type: string;
	 
	 constructor(name: string, type: string) {
		 this.id = Hero.cpt;
		 Hero.cpt++;
		 this.name = name;
		 this.type = type;
	 }
 }