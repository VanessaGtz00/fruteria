const app1 = { 
    data(){
        return{
            mensaje: '',
            frutas:[{nombre:'Frambuesa', cantidad:1, precioUnitario:1, total:0}],
            nuevaFruta:'',
            nuevaCantidad:0,
            nuevoPrecio:0,
            iva: 0.16 // IVA del 16%
        }
    },
    methods : {
        montoFruta:function(i){
            this.frutas[i].total = this.frutas[i].cantidad * this.frutas[i].precioUnitario;
            return this.frutas[i].total;
        },

        agregar:function(){
            if (this.nuevaCantidad == '') this.nuevaCantidad = 0;
            if (this.nuevaFruta) {
                this.frutas.push({
                    nombre: this.nuevaFruta, 
                    cantidad: this.nuevaCantidad, 
                    precioUnitario: this.nuevoPrecio,
                    total: 0
                });
                this.nuevaFruta = '';
                this.nuevaCantidad = 0;
                this.nuevoPrecio = 0;
            }
        }
    },
    computed: {
        subtotal() {
            return this.frutas.reduce((sum, fruta) => sum + (fruta.cantidad * fruta.precioUnitario), 0);
        },
        ivaAmount() {
            return this.subtotal * this.iva;
        },
        total() {
            return this.subtotal + this.ivaAmount;
        }
    }
};
const apli2 = Vue.createApp(app1).mount('#seccion');
