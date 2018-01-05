<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-info">
            <div class="panel-heading">  <h3 class="panel-title">{{ stock.name }}<small> {{stock.price}} |  Quantity {{ stock.quantity }}</small></h3></div>
            <div class="panel-body">
                <div class="pull-left">
                    <input type="number" 
                        class="form-control" 
                        placeholder="Quantity" 
                        :class="{danger: insufficientQty}"
                        v-model.number="quantity"/>
                </div>
                <div class="pull-right">
                    <button 
                        class="btn btn-primary"
                        @click="sell"
                        :disabled= "insufficientQty ||  quantity <= 0"
                        >{{ insufficientQty ? 'Insufficient Qty' : 'Sell' }}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.danger {
    border: 1px solid red;
}
</style>

<script>
import { mapActions } from 'vuex'
export default {
  props: ['stock'],
    data() {
        return {
            quantity:0 
        }
    },
    computed: {
        funds() {
            return this.$store.getters.funds;
        },
        insufficientQty() {
            return this.quantity > this.stock.quantity;
        }
    },
    methods: {
        ...mapActions({
            placeSellOrder: 'sellStock'
        }),
        sell() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity
            }
            this.placeSellOrder(order);
            //this.quantity = 0
        }
    }
}
</script>

<style>
    .btn {
        margin-left:30px;
    }
</style>
