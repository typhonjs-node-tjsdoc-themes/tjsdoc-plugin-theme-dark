import { ThemeDefault } from 'typhonjs-plugin-theme-default';

/**
 *
 */
export class ThemeDark extends ThemeDefault
{
   constructor()
   {
      super();

      this.addThemeDirName({ dirName: __dirname });
   }
}

export default new ThemeDark();
