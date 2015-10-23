 export class Hero {
	 static cpt:number = 0;
	 
	 id: number;
	 name: string;
	 
	 constructor(name: string) {
		 this.id = Hero.cpt;
		 Hero.cpt++;
		 this.name = name;
	 }
 }